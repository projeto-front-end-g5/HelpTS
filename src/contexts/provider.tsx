import { ReactNode } from 'react';
import { CommentsProvider } from './comments/comments';
import { DashboardProvider } from './dashboard/dashboard';
import { LoginProvider } from './login/login';
import { PostProvider } from './createPosts/posts';
import { RegisterProvider } from './register/register';
import { SolutionsProvider } from './solutions/solutions';

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <DashboardProvider>
    <LoginProvider>
      <RegisterProvider>
        <PostProvider>
          <SolutionsProvider>
            <CommentsProvider>{children}</CommentsProvider>
          </SolutionsProvider>
        </PostProvider>
      </RegisterProvider>
    </LoginProvider>
  </DashboardProvider>
);

export default Provider;
