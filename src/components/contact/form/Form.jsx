import React from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { send } from "emailjs-com";

const Form = () => {
  const {
    register, // Use register to bind input fields
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_caylikr", "template_rzmjjmg", data, "Av5av0DOF4uMNXyU7")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submitting your query");
    document.getElementById("queryform").reset();
  };

  return (
    <div className="queryform">
      <ToastContainer />
      <form id="queryform" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            {...register("from_name", {
              required: "Name is Required",
            })}
          />
          {errors.from_name?.message && (
            <p className="error">{errors.from_name?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is Required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="error">{errors.reply_to?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone Number is Required",
            })}
          />
          {errors.phone_number?.message && (
            <p className="error">{errors.phone_number?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is Required",
            })}
          />
          {errors.subject?.message && (
            <p className="error">{errors.subject?.message}</p>
          )}
        </div>

        <div className="input-field full-width">
          <textarea
            name="text"
            placeholder="Your Message..."
            {...register("text", {
              required: "Message is Required",

              minLength: {
                value: 20,
                message: "Minimum 20 characters required",
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 characters aloowed",
              },
            })}
          />
          {errors.text?.message && (
            <p className="error">{errors.text?.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
