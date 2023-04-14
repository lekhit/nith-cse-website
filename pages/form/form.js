import {
  withFormik, FormikProps, FormikErrors, Form, Field
} from 'formik';


const ERROR_MSG = 'Oops! Something went wrong 🤷‍♂️';
const fetchData = async ({ url, options }) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(ERROR_MSG);
  }

  const data = await response.json();
  return data;
};



const InnerForm = (props) => {
  const { touched, errors, isSubmitting,getFieldProps } = props;
  return (
    <Form >
      <div className="flex text-white justify-around ">

      <h1 className="mb-1">Why are you fit for this job?</h1>
<Field as="textarea" name="message" className="text-xs mb-4 p-2 w-[400px] h-[100px] bg-transparent text-white rounded-sm px-2 outline outline-1 outline-[#b27ee3] border-[#b27ee3]"  placeholder="Message" />
      {touched.message && errors.message && <div className=" text-red-500 ">{errors.message}</div>}
      <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
           
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>Registration</span>
                <span>FORM</span>
              </div>
              <div className="upload_title">

              <input className="app-form-control" placeholder="photo drive link"
                    type="text"
                    name="photo_link" id="photo_link"
                    {...getFieldProps('photo_link')}
                  />
                
              </div>
              
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <Field
                    className="app-form-control"
                    placeholder="NAME"
                    name="name" id="name"

                    type="text"
                    {...getFieldProps('name')}
                  />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="Roll_no"
                    type="text"
                    name="roll_no" id="roll_no"
                    {...getFieldProps('roll_no')}
                  />
                </div>
                <div className="app-form-group">
                  <input
                  disabled
                  name="email" id="email"
                  type="email"
                    className="app-form-control"
                    placeholder="Email"
                    {...getFieldProps('email')}
                  />
                </div>
                <div className="app-form-group">
                        <input
                          name="phone" id="phone"
                          type="number"
                          className="app-form-control"
                          placeholder="phone no"

                          {...getFieldProps('phone')}
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="smester"
                          name="smester" id="smester"
                          type="number"
                          {...getFieldProps('smester')}

                        />
                      </div>

                      <div className="app-form-group">
                        <input
                          name="cgpa" id="cgpa"
                          type="number"
                          className="app-form-control"
                          placeholder="cgpa"
                          {...getFieldProps('cgpa')}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="skill_1"
                          type="text"
                          name="skill_1" id="skill_1"
                          {...getFieldProps('skill_1')}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="skill_2"
                          type="text"
                          name="skill_2" id="skill_2"
                          {...getFieldProps('skill_2')}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="skill_3"
                          type="text"
                          name="skill_3" id="skill_3"
                          {...getFieldProps('skill_3')}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="Personal Website"
                          type="text"
                          name="website" id="website"
                          {...getFieldProps('website')}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="education_10th"
                          type="text"
                          name="education_10th" id="education_10th"
                          {...getFieldProps('education_10th')}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="education_12th"
                          type="text"
                          name="education_12th" id="education_12th"
                          {...getFieldProps('education_12th')}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="about"
                          type="text"
                          name="about" id="about"
                          {...getFieldProps('about')}
                        />
                      </div>
                <div className="app-form-group buttons">
                  
                  <button className="app-form-button" type="submit" onClick={postDate}  >SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>

          </div>
    </Form>
  );
};


const MyForm = withFormik({
  // Transform outer props into form values
  // mapPropsToValues: (props) => ({
  //   amt:0,
  //   message: '',
  // }),

  // Add a custom validation function (this can be async too!)
  validate: (values) => {
    const errors= {};
    
    return errors;
  },

  handleSubmit: async (values) => {
    console.log(values)
    const options = {
      method: 'POST',
      body: JSON.stringify({ ...values,['key']:values.email }),
      headers: {
      },
    };
    await fetchData({ url: '/api/apply_proposal', options });
    // do submitting things
  },
})(InnerForm);

export default MyForm;
