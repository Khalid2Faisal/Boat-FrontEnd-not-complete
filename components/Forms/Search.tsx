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
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const { search } = getValues();

  useEffect(() => {
    if (errors.search) {
      toast.error(errors.search.message, {
        toastId: errors.search.message,
        autoClose: 3500,
      });
    }
    toast.clearWaitingQueue();
  }, [errors, search]);

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
