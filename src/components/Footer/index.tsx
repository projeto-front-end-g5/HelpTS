import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { FootContainer } from './style';

const devsData = [
  {
    nome: 'Sara Lins',
    linkedin: 'https://www.linkedin.com/in/sara-lins-75803a217/',
    intagram: 'https://www.instagram.com/saralins_/',
    github: 'https://github.com/sara-lins',
    picture: 'https://avatars.githubusercontent.com/u/87839256?v=4',
  },
  {
    nome: 'Daniel Matuoka',
    linkedin: 'https://www.linkedin.com/in/danielmatuoka/',
    intagram: 'https://www.instagram.com/dan_mtk_/',
    github: 'https://github.com/danmatuoka',
    picture: 'https://avatars.githubusercontent.com/u/98976279?v=4',
  },
  {
    nome: 'Natália Cavicchioli',
    linkedin: 'https://www.linkedin.com/in/natalia-cavicchioli/',
    intagram: 'https://www.instagram.com/nataliacavicchioli/',
    github: 'https://github.com/NataliaCavicchioli',
    picture: 'https://avatars.githubusercontent.com/u/103126226?v=4',
  },
  {
    nome: 'Patrick Santos',
    linkedin: 'https://www.linkedin.com/in/patrick-santos-91489314a/',
    intagram: '',
    github: 'https://github.com/PatrickHAS',
    picture: 'https://ca.slack-edge.com/TQZR39SET-U035HQH78AW-d6b67a425073-512',
  },
  {
    nome: 'Sofia Alexandrino',
    linkedin: 'https://www.linkedin.com/in/sofiaalexandrino/',
    intagram: '',
    github: 'https://github.com/sofiaalage',
    picture: 'https://avatars.githubusercontent.com/u/86122263?v=4',
  },
];

interface FooterProps {
  targetType: string;
}

const Footer = ({ targetType }: FooterProps) => {
  const { backGroundColorContainerBlue, backGroundColorDark, currentTheme } =
    useDashboardContext();

  return (
    <FootContainer
      theme={currentTheme}
      backGroundColorContainerBlue={backGroundColorContainerBlue}
      backGroundColorDark={backGroundColorDark}
    >
      <div className='div-one'>
        <h1>Aplicação desenvolvida para conclusão do módulo Front-End</h1>
      </div>
      <div className='div-two'>
        <div className='divSection'>
          <section className='section-one'>
            <div className='divTitle'>
              <h2 className='title'> Sobre nós:</h2>
            </div>

            <div className='divbottom'>
              <p className='text'>
                O HelpTS foi desenvolvido com o objetivo de centralizar todas as
                soluções em TypeScript em um só lugar, de forma clara, rápida e
                objetiva para que o desenvolvedor perca o menor tempo possível
                na busca da solução para o seu problema.
              </p>
              <ul>
                {devsData.map((dev) => (
                  <li key={dev.nome}>
                    <div className='divIcon'>
                      <a target={targetType} href={dev.linkedin}>
                        <FaLinkedin className='icon' />
                      </a>
                      <a target={targetType} href={dev.intagram}>
                        <FaInstagramSquare className='icon' />
                      </a>
                      <a target={targetType} href={dev.github}>
                        <FaGithubSquare className='icon' />
                      </a>
                    </div>
                    <h3>{dev.nome}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className='divSectionTwoThree'>
            <section className='section-two'>
              <div className='divTitle'>
                <h2 className='title'>Contato:</h2>
              </div>

              <div className='divbottom'>
                <ul>
                  {devsData.map((dev) => (
                    <li>
                      <div className='divIcon'>
                        <a target={targetType} href={dev.linkedin}>
                          <FaLinkedin className='icon' />
                        </a>
                        <a target={targetType} href={dev.intagram}>
                          <FaInstagramSquare className='icon' />
                        </a>
                        <a target={targetType} href={dev.github}>
                          <FaGithubSquare className='icon' />
                        </a>
                      </div>
                      <h3>{dev.nome}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className='section-three'>
              <div className='divTitle'>
                <h2 className='title'>Team de Desenvolvedores</h2>
              </div>

              <div className='divbottom'>
                <ul>
                  {devsData.map((dev) => (
                    <li>
                      <img
                        className='dev-photos'
                        src={dev.picture}
                        alt={dev.nome}
                      />
                      <div className='tooltip'>
                        <div className='tooltipDev'>{dev.nome}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </FootContainer>
  );
};

export default Footer;
