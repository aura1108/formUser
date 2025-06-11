import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserFormList } from "./userForm/UserFormList";
import { UserFormCreate } from "./userForm/UserFormCreate";
import { UserFormEdit } from "./userForm/UserFormEdit";
import { UserFormShow } from "./userForm/UserFormShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"user-form-api"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserForm"
          list={UserFormList}
          edit={UserFormEdit}
          create={UserFormCreate}
          show={UserFormShow}
        />
      </Admin>
    </div>
  );
};

export default App;
