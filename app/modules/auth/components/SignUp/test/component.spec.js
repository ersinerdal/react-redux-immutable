import {plainComponent as SignUp} from '../index'

describe ("SignUp Component", function () {

  it("should handle signup form", function () {

    const handleSubmit = sinon.spy();
    const expected = {
      first_name:"ersin",
      last_name:"erdal",
      email:"ersinerdall@hotmail.com",
      password:"123456"
    }

    const wrapper = mount(<SignUp handleSubmit={handleSubmit} />)

    wrapper.ref('first_name').get(0).value = expected.first_name;
    wrapper.ref('last_name').get(0).value = expected.last_name;
    wrapper.ref('email').get(0).value = expected.email;
    wrapper.ref('password').get(0).value = expected.password;

    const form = wrapper.find('#signUpForm')
    form.simulate('submit')

    expect(handleSubmit.calledOnce).to.be.true

    expect(handleSubmit.calledWith(expected)).to.be.true

  });
});
