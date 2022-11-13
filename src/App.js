// in App.js
import { Amplify } from "aws-amplify";
import { Resource } from "react-admin";
import {
  AmplifyAdmin,
  CognitoGroupList,
  CognitoUserList,
  CognitoUserShow,
} from "react-admin-amplify";
import awsExports from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

Amplify.configure(awsExports);

function App() {
  return (
    <AmplifyAdmin
      operations={{ queries, mutations }}
      options={{
        authGroups: ["admins"],
        enableAdminQueries: true,
      }}
    >

      <Resource name="templates" 
      options={{ label: "Templates" }}
      />
      <Resource
        name="cognitoUsers"
        options={{ label: "Cognito Users" }}
        list={CognitoUserList}
        show={CognitoUserShow}
      />
      <Resource
        name="cognitoGroups"
        options={{ label: "Cognito Groups" }}
        list={CognitoGroupList}
      />
    </AmplifyAdmin>
  );
}

export default App;