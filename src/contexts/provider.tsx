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
  <SolutionsProvider>
    <DashboardProvider>
      <LoginProvider>
        <RegisterProvider>
          <PostProvider>
            <CommentsProvider>{children}</CommentsProvider>
          </PostProvider>
        </RegisterProvider>
      </LoginProvider>
    </DashboardProvider>
  </SolutionsProvider>
);

export default Provider;
