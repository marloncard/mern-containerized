import { dbConnection } from './db-handler';
import { User } from '../models/Users';
import request from 'supertest';
import { Server } from '../server';


const con: dbConnection = new dbConnection();
let svr: any;

const userOne = { userName: 'MarcusG', firstName: 'Marcus', lastName: 'Garvey', email: 'mg@gmail.com', }
const userTwo = { userName: 'MaxY', firstName: 'Max', lastName: 'Yell', email: 'maxyg@gmail.com', }

beforeAll(async () => {
  await con.connect();
  const serverInst: Server = Server.bootstrap(true);
  svr = await serverInst.start();
});

afterEach(async () => await con.clearDatabase());

afterAll(async () => await con.close());


describe('User API Endpoints', () => {

  it('should create and then get a user', async () => {
    let res = await request(svr)
      .post('/users')
      .send(userOne)
    const user_id = res.body._id;
    res = await request(svr)
      .get(`/users/${user_id}`);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("email", "mg@gmail.com");
      expect(await User.findOne({ email: "mg@gmail.com" })).toHaveProperty("email", "mg@gmail.com");
  });

  it('should create and then get all users', async () => {
    let res = await request(svr)
      .post('/users')
      .send(userOne)
    res = await request(svr)
      .post('/users')
      .send(userTwo);

    res = await request(svr)
      .get(`/users`);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveLength(2);
      expect(await User.find({})).toHaveLength(2);
  });

  it('should create and then update a user', async () => {
    let res = await request(svr)
      .post('/users')
      .send(userOne)
    const user_id = res.body._id;
    res = await request(svr)
      .patch(`/users/${user_id}`)
      .send({
        email:'margerie@gmail.com'
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("email", "margerie@gmail.com");
      expect(await User.findOne({ email: "margerie@gmail.com" })).toHaveProperty("email", "margerie@gmail.com");
  });
  
  it('should create and then delete a user', async () => {
    let res = await request(svr)
      .post('/users')
      .send(userOne)
    const user_id = res.body._id;
    res = await request(svr)
      .delete(`/users/${user_id}`)

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("email", "mg@gmail.com");
      expect(await User.find({})).toHaveLength(0);
  });
})