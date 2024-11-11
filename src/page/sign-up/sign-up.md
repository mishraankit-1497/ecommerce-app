# useDispatch
1. Allows to access the redux dispatch function allowing you trigger the asynchronous actions to redux store.
2. useDispatch() hook sending a dispatch function with asynchronous actions dispatching payload updateFormData(), setError(), signUpUser()
3. signUpUser() -> Handling event
4. dispatch(updateFormData({[name]: value})) -> sends an action {updateFormData} to the redux store to update the form data with the user's input.
5. dispatch(setError(errors)) -> sends an action {validationErrors} to the redux store to update the errors.
6.  dispatch(signUpUser(formData)) -> sends an asynchronous action {signUpUser} to create async thunk payload creator.

# useSelector
1. 