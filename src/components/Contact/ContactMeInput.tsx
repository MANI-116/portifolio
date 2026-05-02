interface Props {
  title: string;
  type:string
}

const ContactMeInput = () => {
  return (
    <div className="contact__inputs grid">
      <ContactInput title="Name" type="text"></ContactInput>
      <ContactInput title="Email" type="email" />
      <div className=" item3">

      <ContactInput title="Project" type="text"  />
      </div>
    
     <div className="contact__content item4">
      <label htmlFor="Message" className="contact__label" >
      Message
    </label>
    <br />
      <textarea rows={7} className="contact__input" />
    </div>
    </div>
  );
};


const ContactInput = ({ title,type }: Props) => {
  return (
    <div className="contact__content">
      <label htmlFor={title} className="contact__label" >
      {title}
    </label>
      <input type={type} className="contact__input" />
    </div>
  
  );
};



export default ContactMeInput;
