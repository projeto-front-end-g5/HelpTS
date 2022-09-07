import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import api from '../../services/api';

interface ISolutionsProps {
  children: ReactNode;
}

type ContentType = {
  text: string;
  code: string[];
};

export interface IDataEdit {
  title: string;
  tag: string;
  contentText: string;
  contentCode: string;
}

export interface SolutionType {
  title: string;
  content: ContentType;
  created_at: string;
  updated_at: string;
  tags: string[];
  likes: number;
  userId: number;
  id: number;
}

interface ISolutionsData {
  search: string;
  titleSolution: string;
  idSolution: number;
  solutions: SolutionType[];
  solutionEdit: SolutionType;
  filteredSolutions: SolutionType[];
  visibilityDeleteSolution: boolean;
  contentTextSolution: string;
  contentCodeSolution: string;
  contentTag: string[];
  visibilityEditSolution: boolean;
  deleteSolution: () => void;
  searchSolution: () => void;
  EditSolution: (item: SolutionType) => void;
  RequestEdit: (item: IDataEdit) => void;
  setIdSolution: (idSolution: number) => void;
  getSolution: (data: ISolutionsData) => void;
  createSolution: (data: ISolutionsData) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setVisibilityDeleteSolution: (visibilityDeleteSolution: boolean) => void;
}

const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children }: ISolutionsProps) => {
  const token = localStorage.getItem('token');

  const [solutions, setSolutions] = useState<SolutionType[]>([]);
  const [filteredSolutions, setFilteredSolutions] = useState<SolutionType[]>(
    []
  );
  const [search, setSearch] = useState('');
  const [visibilityDeleteSolution, setVisibilityDeleteSolution] =
    useState(true);
  const [visibilityEditSolution, setVisibilityEditSolution] = useState(true);
  const [idSolution, setIdSolution] = useState(0);
  const [titleSolution, setTitleSolution] = useState('');
  const [contentTextSolution, setContentTextSolution] = useState('');
  const [contentCodeSolution, setContentCodeSolution] = useState('');
  const [contentTag, setContentTag] = useState<string[]>([]);
  const [solutionEdit, setSolutionEdit] = useState<SolutionType>(
    {} as SolutionType
  );

  const createSolution = (data: ISolutionsData) => {
    api
      .post('/solutions', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log('Solução criada');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const getSolution = () => {
    api
      .get('/solutions')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  useEffect(() => {
    api
      .get('/solutions')
      .then((response) => {
        setSolutions(response.data);
        setFilteredSolutions(response.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  const searchSolution = () => {
    setFilteredSolutions(
      solutions.filter((solution) =>
        solution.title.toLowerCase().includes(search)
      )
    );
  };

  const deleteSolution = () => {
    api
      .delete(`/solutions/${idSolution}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log('Solução deletada');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const RequestEdit = (item: IDataEdit) => {
    console.log(item);
    const { title, tag, contentText, contentCode } = item;
    const newContent = {
      text: contentText,
      code: contentCode,
    };
    const dateUpdate = new Date();
    const day = dateUpdate.getDate();
    const month = dateUpdate.getMonth() + 1;
    const year = dateUpdate.getFullYear();
    const newDateSolution = `0${day}/0${month}/${year}`;
    console.log(dateUpdate, newDateSolution);

    api
      .patch(
        `/solutions/${solutionEdit.id}`,
        {
          // eslint-disable-next-line object-shorthand
          title: title,
          content: newContent,
          // eslint-disable-next-line object-shorthand, camelcase
          created_at: solutionEdit.created_at,
          // eslint-disable-next-line object-shorthand, camelcase
          updated_at: newDateSolution,
          // eslint-disable-next-line object-shorthand
          tags: tag,
          // eslint-disable-next-line object-shorthand
          userId: solutionEdit.userId,
          // eslint-disable-next-line object-shorthand
          id: solutionEdit.id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        console.log('Solução editada');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const EditSolution = (item: SolutionType) => {
    setVisibilityEditSolution(true);
    setSolutionEdit(item);
    setTitleSolution(item.title);
    setContentTextSolution(item.content.text);
    setContentCodeSolution(item.content.code[0]);
    setContentTag(item.tags);
  };

  /*   EditSolution({
    title: 'Como tipar um useState?',
    content: {
      text: "O formato do state todo mundo já conhece: [example, setExample] = useState(''). Caso seja apenas uma string, você pode tipar assim: [example, setExample] = useState<string>(“”). (No entanto o typescript já deduziria que a tipagem é string, então não é obrigatório colocar o <string>. Caso seja apenas um booleano, você pode tipar assim: [example, setExample] = useState<boolean>(true). Agora, caso estejamos falando de um objeto, você teria que tipar cada propriedade desse objeto. Caso seja um array de objetos, assim como sendo apenas um objeto, você precisa tipar o objeto e declarar que é um array.",
      code: [
        "function soma (a:number, b:number):number {return a + b} const exemplo = ():void => {console.log('exemplo')}",
      ],
    },
    created_at: '01/09/2022',
    updated_at: '01/09/2022',
    tags: ['state'],
    userId: 4,
    id: 2,
    likes: 0,
  }); */

  return (
    <SolutionsContext.Provider
      value={{
        createSolution,
        getSolution,
        solutions,
        search,
        setSearch,
        searchSolution,
        filteredSolutions,
        visibilityDeleteSolution,
        setVisibilityDeleteSolution,
        deleteSolution,
        idSolution,
        setIdSolution,
        RequestEdit,
        EditSolution,
        solutionEdit,
        titleSolution,
        contentTextSolution,
        contentCodeSolution,
        contentTag,
        visibilityEditSolution,
      }}
    >
      {children}
    </SolutionsContext.Provider>
  );
};

const useSolutionsContext = () => useContext(SolutionsContext);

export { useSolutionsContext, SolutionsProvider };
