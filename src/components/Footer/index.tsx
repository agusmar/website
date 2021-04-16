import Link from 'next/link';
import styles from './styles.module.css';
import {
  faTwitter,
  faGithubAlt,
  faLinkedin,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSettings } from '../../lib/settings';

const Footer: React.FC = () => {
  const { socialnetworks } = useSettings();

  const navItems = [
    { title: 'Unirse a Discord', link: 'https://discord.gg/frontendcafe' },
    { title: 'Proyectos CMYK', link: '/cmyk' },
    { title: 'Mentorías', link: '/mentorias' },
    { title: 'Prácticas de inglés', link: '/ingles' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="container flex flex-col-reverse justify-center gap-12 p-16 mx-auto text-white md:gap-0 md:flex-row md:justify-between">
        <div className="flex flex-col gap-5 text-center md:text-left">
          <img
            src="/logo-square.png"
            className="hidden w-10 h-10 rounded-full md:block md:h-12 md:w-12"
          />
          <div className="grid justify-center w-full pb-8 font-medium md:grid-cols-2 gap-y-2 gap-x-5 md:pb-3">
            {navItems?.map(({ link, title }) => (
              <Link href={link} key={link}>
                <a>{title}</a>
              </Link>
            ))}
          </div>

          <p className="font-light">© FrontendCafé {currentYear}</p>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p className="w-auto font-medium text-center md:text-left">
            Encuéntranos en
          </p>
          <div className="flex justify-center gap-3 md:justify-start">
            {socialnetworks?.twitter && (
              <Link href={socialnetworks?.twitter}>
                <a
                  target="_blank"
                  className="grid w-6 h-6 rounded-full place-items-center"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </Link>
            )}

            {socialnetworks?.github && (
              <Link href={socialnetworks?.github}>
                <a
                  target="_blank"
                  className="grid w-6 h-6 rounded-full place-items-center"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                </a>
              </Link>
            )}

            {socialnetworks?.youtube && (
              <Link href={socialnetworks?.youtube}>
                <a
                  target="_blank"
                  className="grid w-6 h-6 rounded-full place-items-center"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </Link>
            )}

            {socialnetworks?.linkedin && (
              <Link href={socialnetworks?.linkedin}>
                <a
                  target="_blank"
                  className="grid w-6 h-6 rounded-full place-items-center "
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </Link>
            )}

            {socialnetworks?.twitch && (
              <Link href={socialnetworks?.twitch}>
                <a
                  target="_blank"
                  className="grid w-6 h-6 rounded-full place-items-center"
                >
                  <FontAwesomeIcon icon={faTwitch} size="lg" />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
