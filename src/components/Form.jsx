/* eslint-disable react/prop-types */
export function Form({
  handleSubmit,
  onSubmit,
  errors,
  register,
  handleGetEmail,
}) {
  return (
    <form
      action="#"
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <fieldset>
        <legend className="visually-hidden">Email Address</legend>
        <div className="flex">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <span className="error-message active">{errors.email?.message}</span>
        </div>
        <input
          className={`form__input ${errors.email ? "active" : ""}`}
          type="email"
          placeholder="email@company.com"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Valid email required",
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
              message: "Invalid email",
            },
          })}
        />
      </fieldset>
      <button className="button" type="submit" onClick={handleGetEmail}>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
