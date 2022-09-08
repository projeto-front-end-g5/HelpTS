
import Highlight, { defaultProps } from 'prism-react-renderer';
import { FaTrashAlt,FaRegThumbsUp} from 'react-icons/fa';
import { BsPencilFill} from 'react-icons/bs';
import { AiFillGithub} from 'react-icons/ai';
import { DivSolutionCard } from "../SolutionCard/style"
import { Container } from "./style"
import { SolutionType, useSolutionsContext } from '../../contexts/solutions/solutions';
import { formateCode } from '../../libs/formatCode';
import pc from '../../assets/pc.svg';




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

   


  
function insert(original:string, index:number, char:string) {
   const ln = '\n'
   const tab = '\t'
   if (index > 0) {
      return original.substring(0, index) + ln + tab + original.substring(index);
   }
   return char + original;
};



function SolutionFullCard({ id }: ISolutionFullCard): JSX.Element {


   const { solutions } = useSolutionsContext();

   let solution = {} as SolutionType;
   if (solutions.length > 0) {
      solution = getSolution(solutions, id)
   }
  
   return (

      <Container>
         <div className='box-top'>
            <div className='first-top'>
               <img src= {pc} alt= 'logoHelpTS'/>
               <h1 className='title'>{solution.title}</h1>
            </div>

            <div className='second-top'>
                 <div>
                 <BsPencilFill/>
                  <FaTrashAlt/>
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
                  <FaRegThumbsUp/>{solution.likes} Likes</h1>
                  </div>
               </div>

               <div className='solutions-card'>
                  <div className='solution-box'>
                     <h1>{solution.content.text}</h1>
                  </div>

                  <div className='solution-code'>
                  <Highlight {...defaultProps} code={formateCode(solution.content.code[0], 0, true)} language='tsx'>
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
                     <h1 className='comments'>Comentários</h1>
                  </div>
                  

                  <div className='bottom-down'>
     
                     <h1>user.name</h1>
                     
                     <h1 className='gitHub'>user.github</h1>
                  </div>
               </div>
                  
            </div>
                   

      </Container>
   )

}

export default SolutionFullCard