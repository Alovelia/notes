import axios from 'axios';
import api, { API_URL, authHeaders } from '../api';

describe('api', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    sandbox.restore();
  });
  it('should illustrate the work of get method', async () => {
    const url = 'google';
    const queryParams = {};
    const axiosParams = {
      params: queryParams,
      headers: {
        ...authHeaders
      }
    };
    const OK = 'OK';
    const response = { data: { data: OK } };
    const resolved = Promise.resolve(response);
    sandbox.stub(axios, 'get').returns(resolved);
    const result = await api.get(url);
    expect(result).to.be.equal(OK);
    expect(axios.get).to.have.been.calledWith(API_URL + url, axiosParams);
  });
  it('should send query params in get method', async () => {
    const url = 'google';
    const queryParams = {
      id: 1
    };
    const axiosParams = {
      params: queryParams,
      headers: {
        ...authHeaders
      }
    };
    const OK = 'OK';
    const response = { data: { data: OK } };
    const resolved = Promise.resolve(response);
    sandbox.stub(axios, 'get').returns(resolved);
    const result = await api.get(url, queryParams);
    expect(result).to.be.equal(OK);
    expect(axios.get).to.have.been.calledWith(API_URL + url, axiosParams);
  });
});
