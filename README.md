# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- if want delete file -->
rm -rf node-modules

<!-- work with firestore -->
https://www.youtube.com/watch?v=jCY6DH8F4oc

<!-- use firebase firestore -->
1. Add project
2. Project name -> continue
3. Enable -> off -> Create project
4. Continue
5. </> choose web version
6. write App name -> Register app
7. install firebase
8. copy generated configuration and paste firebase/..._config.js -> Continue
9. export const db = getFirestore(app)
10. ^Firestore Database -> Create database -> Next -> Enable
11. Cloud Firestore -> Rules -> change false to true -> publish
12. Cloud Firestore -> Data -> Parent path /....name -> Next
13. write how many fild neded and add it
14. go to js file and get data
15. create arr state -> const [data,setData] = useState([])
16. const dbColectionRef= collection(db, "db...Name")
17. useEffect(()=>{
        const func = async() => {
            const data = await getDocs(dbColectionRef)
            console.log(data.docs)
            setData(data.docs.map(doc=>({...doc.data(), id: doc.id})))
        }
        func()
    },[])
18. enjoy your life


<!-- Sign in with Google -->
1. inside Firebase project go to Autentication -> Sign-in method-> Add new provider
2. chose Google ->Enable-> confirm email -> Save
3. in config file add
    // sign in with Google
    const provider = new GoogleAuthProvider()
    export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        // console.log(result)
        const name = result.user.displayName
        const email = result.user.email
        const photoURL = result.user.photoURL

        const userData = {name, email, photoURL}
        // ceep this data in LocalStorage
        localStorage.setItem("user", JSON.stringify(userData))

    })
    .catch(error =>{
        console.log(error);
    })
    }
4. in js file import ffunction
    <button onClick={signInWithGoogle} className="btn">Sign in with Google</button>


<!-- for firebase usefull -->
https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createUserWithEmailAndPassword
https://firebase.google.com/docs/firestore/quickstart
https://medium.com/litslink/react-js-firebase-basics-in-examples-cfc980e6b144
https://attacomsian.com/blog/javascript-local-storage-store-retrieve-objects


<!-- Sign up with Email and Password -->
1. Authentication-> Sign-in method-> Email/Password-> Enabled
2. async/await createUserWithEmailAndPassword(auth, email, password)
3. async/await signInWithEmailAndPassword(auth, email, password)


<!-- redux -->
npm i redux redux-logger react-redux