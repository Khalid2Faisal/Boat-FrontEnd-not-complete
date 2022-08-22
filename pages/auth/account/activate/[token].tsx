import jwt from "jsonwebtoken";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../app/hooks";
import { register } from "../../../../features/auth/authThunk";
import AccountActivation from "../../../../components/Auth/AccountActivation";
import Layout from "../../../../components/Layout";

const Activate = () => {
  /* Setting the initial state of the component. */
  const [values, setValues] = useState({
    token: "",
    name: "",
  });
  /* Destructuring the values object. */
  const { token, name } = values;

  /* A custom hook that returns the dispatch function from the redux store. */
  const dispatch = useAppDispatch();
  /* A hook that allows you to access the router object. */
  const router = useRouter();

  /* A hook that is called when the component is mounted. It is used to get the token from the url and
  decode it to get the name of the user. */
  useEffect(() => {
    const token = router.query.token as string;
    if (token) {
      const { name } = jwt.decode(token)
        ? (jwt.decode(token) as { name: string })
        : { name: "" };
      setValues({ ...values, token, name });
    }
  }, [router]);

  /**
   * OnSubmit is a function that takes an event as an argument. It dispatches the register function with the token as an
   * argument.
   * @param {FormEvent} e - FormEvent - this is the event that is triggered when the form is submitted.
   */
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register({ token }));
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <AccountActivation userName={name} handleSubmit={onSubmit} />
      </div>
    </Layout>
  );
};

export default Activate;
