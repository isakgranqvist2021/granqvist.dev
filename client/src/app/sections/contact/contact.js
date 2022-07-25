"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const react_1 = require("react");
const aos_1 = __importDefault(require("aos"));
const components_1 = require("components");
const contact_helpers_1 = require("./contact.helpers");
const contact_styled_1 = require("./contact.styled");
const Contact = () => {
    const { values, alert, fieldWithError, isLoading, submit, setValue, clearAlert, } = (0, contact_helpers_1.useContactState)();
    (0, react_1.useEffect)(() => {
        aos_1.default.init({
            duration: 2000,
        });
    }, []);
    return (<contact_styled_1.Styled.Contact id='Contact' aria-label='Contact section' tabIndex={4}>
			<contact_styled_1.Styled.ContactContainer>
				<contact_styled_1.Styled.Form data-aos='fade-right' aria-label='Contact form'>
					<components_1.FormGroup mb={32}>
						<components_1.Label htmlFor='email'>Email</components_1.Label>
						<components_1.Input id='email' placeholder='Email' autoComplete='email' hasError={fieldWithError === 'email'} disabled={isLoading} value={values.email} onChange={(e) => setValue('email', e.target.value)}/>
					</components_1.FormGroup>
					<components_1.FormGroup mb={32}>
						<components_1.Label htmlFor='name'>Full Name</components_1.Label>
						<components_1.Input id='name' placeholder='Your name' hasError={fieldWithError === 'name'} value={values.name} autoComplete='name' disabled={isLoading} onChange={(e) => setValue('name', e.target.value)}/>
					</components_1.FormGroup>
					<components_1.FormGroup mb={10}>
						<components_1.Label htmlFor='message'>Message</components_1.Label>
						<components_1.Textarea id='message' placeholder='Message' hasError={fieldWithError === 'message'} value={values.message} disabled={isLoading} onChange={(e) => setValue('message', e.target.value)}></components_1.Textarea>
					</components_1.FormGroup>

					<components_1.Alert alert={alert} onClose={clearAlert}/>

					<contact_styled_1.Styled.SendButton outlined variant='primary' disabled={isLoading} onClick={submit}>
						{isLoading ? <components_1.Spinner /> : 'Send Message'}
					</contact_styled_1.Styled.SendButton>
				</contact_styled_1.Styled.Form>
				<contact_styled_1.Styled.Social aria-label='Social media icons'>
					<components_1.Text variant='h3' text='You can also reach me through my social channels' data-aos='fade-left'/>

					<contact_styled_1.Styled.SocialIcons data-aos='fade-up'>
						<a aria-label='Instagram link' href='https://www.instagram.com/isakgranqvist2021/' title='Instagram'>
							<img src='/static/icons/instagram.svg' alt='Instagram Icon'/>
						</a>
						<a aria-label='Linkedin link' href='https://www.linkedin.com/in/isak-granqvist-b1217a207/' title='Linkedin'>
							<img src='/static/icons/linkedin.svg' alt='Linkedin Icon'/>
						</a>
						<a aria-label='Github link' href='https://github.com/isakgranqvist2021' title='Github'>
							<img src='/static/icons/github.svg' alt='Github Icon'/>
						</a>
						<a aria-label='Email me link' href='mailto:contact@isakgranqvist.com' title='Send mail'>
							<img src='/static/icons/email.svg' alt='Email Icon'/>
						</a>
					</contact_styled_1.Styled.SocialIcons>
				</contact_styled_1.Styled.Social>
			</contact_styled_1.Styled.ContactContainer>
		</contact_styled_1.Styled.Contact>);
};
exports.Contact = Contact;
