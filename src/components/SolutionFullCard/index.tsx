import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { FaTrashAlt, FaRegThumbsUp, FaGithubSquare } from 'react-icons/fa';
import { BsPencilFill } from 'react-icons/bs';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { AiFillGithub } from 'react-icons/ai';
import { DivSolutionCard } from '../SolutionCard/style';
import { Container } from './style';
import {
  SolutionType,
  useSolutionsContext,
} from '../../contexts/solutions/solutions';
import { formateCode } from '../../libs/formatCode';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import pc from '../../assets/pc.svg';
import { useUserContext } from '../../contexts/user/user';
import api from '../../services/api';

interface IUser {
  email: string;
  password: string;
  name: string;
  github: string;
  contact: string;
}

interface ISolutionFullCard {
  id: number;
}

const teste = 'teste';

type ContentType = {
  text: string;
  code: string;
};

interface FooterProps {
  targetType: string;
}

const Footer = ({ targetType }: FooterProps) => {
  const { backGroundColorContainerBlue, backGroundColorDark, currentTheme } =
    useDashboardContext();
};

function getSolution(solutions: SolutionType[], id: number) {
  let solution = {} as SolutionType;
  for (let index = 0; index < solutions.length; index += 1) {
    if (solutions[index].id === id) {
      solution = solutions[index];
    }
  }
  return solution;
}

function insert(original: string, index: number, char: string) {
  const ln = '\n';
  const tab = '\t';
  if (index > 0) {
    return original.substring(0, index) + ln + tab + original.substring(index);
  }
  return char + original;
}

function getUser(id: number, setUserById: any) {
  const newToken = localStorage.getItem('token');
  api
    .get(`https://json-server-project-help-ts.herokuapp.com/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${newToken}`,
      },
    })
    .then((response) => setUserById(response.data))
    .catch((error) => {
      console.error(error);
    });
}

function SolutionFullCard({ id }: ISolutionFullCard): JSX.Element {
  const { buttonClick, postId } = useDashboardContext();

  const [userById, setUserById] = useState<IUser>({} as IUser);

  const { setVisibilityDeleteSolution } = useSolutionsContext();

  const { solutions } = useSolutionsContext();
  const navigate = useNavigate();

  let solution = {} as SolutionType;
  if (solutions.length > 0) {
    solution = getSolution(solutions, id);
  }

  getUser(solution.userId, setUserById);
  const newToken = localStorage.getItem('token');
  return (
    <Container>
      <div className='box-top'>
        <div className='first-top'>
          <img src={pc} alt='logoHelpTS' />
          <h1 className='title'>{solution.title}</h1>
        </div>

        <div className='second-top'>
          <div>
            <button className='botao-modal-edit' type='button'>
              {postId === solution.id && newToken ? (
                <BsPencilFill />
              ) : (
                newToken && <BsPencilFill />
              )}
            </button>
            <button
              className='botao-modal'
              type='button'
              onClick={() => setVisibilityDeleteSolution(true)}
            >
              {postId === solution.id && buttonClick && newToken ? (
                <FaTrashAlt />
              ) : (
                newToken && <FaTrashAlt />
              )}
            </button>
          </div>

          <div>
            <span className='span--tags'>
              {solution.tags.map((tag) => (
                <p className='hash--card'>#{tag}</p>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className='box-bottom'>
        <div className='up-box'>
          <div className='up-box-first'>
            <h1 className='second-title'>{solution.title}</h1>
          </div>

          <div className='up-box-second'>
            <h1 className='likes'>{solution.created_at}</h1>
            <h1 className='likes'>
              <FaRegThumbsUp />
              {solution.likes} Likes
            </h1>
          </div>
        </div>

        <div className='solutions-card'>
          <div className='solution-box'>
            <h1>{solution.content.text}</h1>
          </div>

          <div className='solution-code'>
            <Highlight
              {...defaultProps}
              code={formateCode(solution.content.code[0], 0, true)}
              language='tsx'
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>

        <div className='bottom-solutions'>
          <div className='bottom-up'>
            <button
              className='comments'
              type='button'
              onClick={() => navigate('/comments', { replace: true })}
            >
              Comentários
            </button>
          </div>

          <div className='bottom-down'>
            <div className='bottom-down-second'>
              {userById.name !== undefined ? (
                <Avatar className='Avatar' sx={{ bgcolor: deepOrange[500] }}>
                  {userById.name[0]}
                </Avatar>
              ) : null}
              <h1 className='titulo-bottom'>{userById.name}</h1>
            </div>

            <div className='bottom-down-first'>
              <button
                className='buttonGit'
                type='button'
                onClick={() => {
                  window.open(userById.github);
                }}
              >
                <FaGithubSquare />
              </button>
              <h1 className='titulo-bottom'>Github</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SolutionFullCard;
