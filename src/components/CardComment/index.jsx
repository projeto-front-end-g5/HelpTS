import { Container, ContainerCommentTitle } from "./style"

const CardComment = () => {
    console.log('oi')

    return(
        <Container>
            <ContainerCommentTitle>
                <div className='cardComment--name'>
                    <strong>B</strong>
                    <p>Bruna</p>
                </div>
                <span>30/08/2022</span>
            </ContainerCommentTitle>
            <div className='cardComment--content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium excepturi quisquam nemo saepe veritatis recusandae ullam itaque corporis modi cumque vero officiis vel, quo est repellat. Ipsam, deleniti qui?
            </div>
        </Container>

    )
}

export default CardComment