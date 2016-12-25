import {plainComponent as SignIn} from '../index'

describe ("SignIn Component", function () {

  it("should handle sign in form", function () {
    const handleSubmit = sinon.spy();
    const expected = {
      email:"mail@mail.com",
      password:"123456"
    }

    const wrapper = mount(<SignIn handleSubmit={handleSubmit} />)

    wrapper.ref('email').get(0).value = expected.email;
    wrapper.ref('password').get(0).value = expected.password;

    const form = wrapper.find('#signInForm')
    form.simulate('submit')

    expect(handleSubmit.calledOnce).to.be.true;
    expect(handleSubmit.calledWith(expected)).to.be.true

  });
});
