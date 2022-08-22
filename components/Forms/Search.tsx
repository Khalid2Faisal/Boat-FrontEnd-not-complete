import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { IoMdSearch } from "react-icons/io";

type IFormInput = {
  search: string;
};

export default function Search() {
  const router = useRouter();
  /* Destructuring the useForm hook. */
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  /* Getting the value of the input field. */
  const { search } = getValues();

  /* Checking if there is an error in the search field. If there is an error, it will display a toast
  message. */
  useEffect(() => {
    if (errors.search) {
      toast.error(errors.search.message, {
        toastId: errors.search.message,
        autoClose: 3500,
      });
    }
    toast.clearWaitingQueue();
  }, [errors, search]);

  /**
   * OnFormSubmit is a function that takes in data, and then pushes the data to the router, and then
   * resets the form.
   * @param data - The data that was submitted from the form.
   */
  const onFormSubmit: SubmitHandler<IFormInput> = (data) => {
    router.push(`/search/${data.search}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className=" focus:outline-gray-800 focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded ">
        <button type="submit">
          <IoMdSearch className="text-gray-600 text-lg" />
        </button>
        <input
          aria-label="Search Bar"
          className=" focus:outline-none w-44 lg:w-56 xl:w-64 bg-gray-50 font-normal text-sm leading-5 text-gray-800 placeholder-gray-600"
          type="text"
          placeholder="Search"
          {...register("search", {
            required: "Search must be provided.",
            minLength: {
              value: 3,
              message: "Search must be at least 3 characters long.",
            },
          })}
        />
      </div>
    </form>
  );
}
