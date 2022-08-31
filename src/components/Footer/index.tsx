import { Container } from "./style";

const devsData = [
    {
        'nome':'Sara Lins',
        'linkedin':'https://www.linkedin.com/in/sara-lins-75803a217/',
        'intagram': '',
        'github':'',
        'picture':''
    },
    {
        'nome':'Daniel Matuoka',
        'linkedin':'https://www.linkedin.com/in/danielmatuoka/',
        'intagram': '',
        'github':'https://github.com/danmatuoka',
        'picture':'https://avatars.githubusercontent.com/u/98976279?v=4'
    },
    {
        'nome':'Natália Cavicchioli',
        'linkedin':'https://www.linkedin.com/in/natalia-cavicchioli/',
        'intagram': '',
        'github':'https://github.com/NataliaCavicchioli',
        'picture':'https://avatars.githubusercontent.com/u/103126226?v=4'
    },
    {
        'nome':'Patrick Santos',
        'linkedin':'',
        'intagram': '',
        'github':'',
        'picture':''
    },
    {
        'nome':'Sofia Alexandrino',
        'linkedin':'https://www.linkedin.com/in/sofiaalexandrino/',
        'intagram': '',
        'github':'',
        'picture':'https://avatars.githubusercontent.com/u/86122263?v=4'
    }
]

const Footer = () => 
<Container>
    <div>
      <h1>Aplicação desenvolvida para conclusão do módulo Front-End</h1>;  
    </div>
    <div>
        <section>
            <h2> Sobre nós</h2>
            <p>
            O HelpTS foi desenvolvido com o objetivo de centralizar todas as soluções em
            TypeScript em um só lugar, de forma clara, rápida e objetiva para que o 
            desenvolvedor perca o menor tempo possível na busca da solução para o seu problema.
            </p>
        </section>

        <section>
            <h2>Links</h2>
            <ul>
                {devsData.map((dev) => 
                    <li>
                    <a href={dev.linkedin}>
                        <img src='https://www.flaticon.com/br/icone-gratis/linkedin_174857' alt='ícone linkedin'/>
                    </a>
                    <a href={dev.intagram}>
                    <img src='https://www.flaticon.com/br/icone-gratis/linkedin_174857' alt='ícone instagran'/>
                    </a>
                    <a href={dev.github}>
                    <img src='https://www.flaticon.com/br/icone-gratis/linkedin_174857' alt='ícone gitHub'/>
                    </a>
                    <h3>{dev.nome}</h3>
                </li>
                
                )}
                
            </ul>
        </section>
         
        <section>
            <h2>Team de Desenvolvedores</h2>
             <ul>
             {devsData.map((dev) => 
                    <li>
                    <img src={dev.picture} alt='imagens dos desenvolvedores'/>
                </li>
                
                )}
             </ul>
      
        </section>
    </div>
</Container>;

export default Footer
