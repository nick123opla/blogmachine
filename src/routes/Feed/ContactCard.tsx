import styled from "@emotion/styled"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,

} from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa";
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <Emoji>💬</Emoji> Контакты
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.whatsapp && (
          <a
            href={`https://wa.me/${CONFIG.profile.whatsapp}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineWhatsApp className="icon" />
            <div className="name">Whatsapp</div>
          </a>
        )}
        {CONFIG.profile.telegram && (
          <a
            href={`https://web.telegram.org/k/#${CONFIG.profile.telegram}`}
            rel="noreferrer"
            target="_blank"
          >
            <FaTelegramPlane className="icon" />
            <div className="name">Telegram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <AiOutlineMail className="icon" />
            <div className="name">Email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
            <div className="name">linkedin</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
