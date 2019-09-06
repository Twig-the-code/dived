import { SignUp } from 'aws-amplify-react';
import React from 'react';
import { I18n } from 'aws-amplify';

const SignupContainer = props => (
  <form className="signup-field-container">
    <div className="mb-4">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="username"
      >
        {I18n.get('username')}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        key="username"
        name="username"
        onChange={props.handleInputChange}
        type="text"
        placeholder={I18n.get('username')}
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        key="password"
        name="password"
        onChange={props.handleInputChange}
        type="password"
        placeholder="******************"
      />

    </div>
    <div className="mb-6">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="password-confirm"
      >
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password-confirm"
        key="password-confirm"
        name="password-confirm"
        onChange={props.handleInputChange}
        type="password"
        placeholder="******************"
      />

    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => props.signUp()}
      >
        Login
      </button>
      <p className="text-grey-dark text-xs">
        No Account?{' '}
        <a
          className="text-indigo cursor-pointer hover:text-indigo-darker"
          onClick={() => props.changeState('signUp')}
        >
          Create account
        </a>
      </p>
    </div>
  </form>
);

export class MyCustomSignUp extends SignUp {
  constructor() {
    super();
    this.gotoSignIn = this.gotoSignIn.bind(this);
  }

  gotoSignIn() {
    // to switch the authState to 'signIn'
    this.props.onStateChange('signIn', {});
  }

  render() {
    const { authState } = this.props;
    const c =
      authState === 'signUp' ? (
        <div className="signup">
          <p className="signup__header">{I18n.get('signup info')}</p>
          <SignupContainer
            signUp={super.signUp}
            changeState={super.changeState}
            handleInputChange={e => this.handleInputChange(e)}
          />
        </div>
      ) : null;
    return c;
  }
}
