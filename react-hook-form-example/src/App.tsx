import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface FormValues {
  firstName: string;
}

function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: "Enter your name",
          minLength: {
            value: 5,
            message: "Length must be more than 5 char",
          },
        })}
      />
      <input type="submit" disabled={!isValid} />
      <div style={{ height: 40 }}>
        {errors?.firstName && <p>{errors?.firstName.message}</p>}
      </div>
    </form>
  );
}

export default App;
