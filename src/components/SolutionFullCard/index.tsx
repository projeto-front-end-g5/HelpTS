import Highlight, { defaultProps } from 'prism-react-renderer';
import { FaTrashAlt } from 'react-icons/fa';
import LogoRegisterLogin from "../LogoRegisterLogin"
import { DivSolutionCard } from "../SolutionCard/style"
import { Container } from "./style"
import { SolutionType, useSolutionsContext } from '../../contexts/solutions/solutions';

interface ISolutionFullCard {
   id: number;
}


const teste = "teste" 

type ContentType = {
   text: string;
   code: string;
};

function getSolution(solutions: SolutionType[], id: number) {
   let solution = {} as SolutionType;
   for (let index = 0; index < solutions.length; index += 1) {
      if (solutions[index].id === id) {
         solution = solutions[index]
      }
   }
   return solution
}


     
 


function SolutionFullCard({ id }: ISolutionFullCard): JSX.Element {


   const { solutions } = useSolutionsContext();

   let solution = {} as SolutionType;
   if (solutions.length > 0) {
      solution = getSolution(solutions, id)
   }
console.log(solution.content.code)
   return (

      <Container>
         <div className='box-top'>
            <div className='first-top'>
               <LogoRegisterLogin />
               <h1 className='title'>{solution.title}</h1>
            </div>

            <div className='second-top'>

               <span className='span--tags'>
                  {solution.tags.map((tag) => (
                     <p className='hash--card'>#{tag}</p>
                  ))}
               </span>
            </div>
         </div>   
            <div className='box-bottom'>
               <div>
                  <h1 className='second-title'>{solution.title}</h1>
                  <h1 className='likes'>{solution.created_at}</h1>
                  <h1 className='likes'> {solution.likes}</h1>
               </div>

               <div>
                  <div className='solution-box'>
                     <h1>{solution.content.text}</h1>
                  </div>

                  <div className='solution-code'>
                  <Highlight {...defaultProps} code={solution.content.code.toString()} language='tsx'>
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

               <div>
                  <h1 className='likes'>Comentários</h1>
               </div>

               <div>
                  <h1>Usuário</h1>
                  <h1 className='gitHub'>Github Usuário</h1>
               </div>
            </div>
                   

      </Container>
   )

}

export default SolutionFullCard