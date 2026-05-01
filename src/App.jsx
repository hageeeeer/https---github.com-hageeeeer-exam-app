import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentAnswers from "./features/admin/pages/StudentAnswers";
import AuthLayout from "./layout/AuthLayout";
import LoginPage from "./features/Authentication/LoginPage";
import RegisterPage from "./features/Authentication/RegisterPage";
import DashboardLayout from "./layout/DashboardLayout";
import DiplomasAdmin from "./features/admin-dashboard/pages/Diplomas";
import DiplomaAdminDetails from "./features/admin-dashboard/pages/DiplomaDetails";
import AddNewDiploma from "./features/admin-dashboard/pages/AddNewDiploma";
import EditNewDiploma from "./features/admin-dashboard/pages/EditNewDiploma";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExamDetails from "./features/admin-dashboard/pages/ExamDetails";
import AddNewQuestion from "./features/admin-dashboard/pages/AddNewQuestion";
import AddNewExam from "./features/admin-dashboard/pages/AddNewExam";
import ExamAdminPage from "./features/admin-dashboard/pages/ExamAdminPage";
import StudentExamsPage from './features/admin/pages/StudentExamsPage';
import { Toast } from "@heroui/react";
import StudentDiplomas from "./features/admin/pages/StudentAnswers";
import Result from "./features/admin/pages/Result";
import ProtectedRoute from "./features/Authentication/ProtectedRoute";


export default function App() {
  const queryClient = new QueryClient();

  // routing pathes
  const router = createBrowserRouter([
    // المجموعة الأولى: بدون سايد بار
    {
      path:'/',
      element: <AuthLayout />,
      children: [
        { index:true, element: <LoginPage /> },
        { path: "/auth/register", element: <RegisterPage /> },
      ],
    },
    // المجموعة الثانية: بسايد بار (أدمن + طالب)
    {
      path: "/admin",
      element: <DashboardLayout />,
      children: [
        // admin
        // diploma
        { index: true, element: <ProtectedRoute><DiplomasAdmin></DiplomasAdmin></ProtectedRoute> },
        { path: "/admin/diplomadmin/:subId", element: <ProtectedRoute><DiplomaAdminDetails /> </ProtectedRoute>},
        // question
  
        { path: "/admin/question/add/:examId/:subId", element: <ProtectedRoute><AddNewQuestion /></ProtectedRoute> },
        // exams
        { path: "/admin/exams", element: <ProtectedRoute><ExamAdminPage /></ProtectedRoute> },
        { path: "/admin/exam/:examId", element:<ProtectedRoute> <ExamDetails /></ProtectedRoute> },
        { path: "/admin/exam/add", element: <ProtectedRoute><AddNewExam /></ProtectedRoute> },

        { path: "/admin/AddNewDiploma", element: <ProtectedRoute><AddNewDiploma /></ProtectedRoute> },
        { path: "/admin/EditNewDiploma", element: <ProtectedRoute><EditNewDiploma /></ProtectedRoute> },

        // student
        { path: "/admin/student/answers", element: <ProtectedRoute><StudentAnswers /></ProtectedRoute> },
        { path: "/admin/results", element: <ProtectedRoute><Result /></ProtectedRoute> },
        { path: "/admin/students/exams", element: <ProtectedRoute><StudentDiplomas /></ProtectedRoute> },
        { path: "/admin/student/exam/:examId", element: <ProtectedRoute><StudentExamsPage /></ProtectedRoute> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
       <Toast.Provider />
      <RouterProvider router={router}> </RouterProvider>;
    </QueryClientProvider>
  );
}
