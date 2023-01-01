<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/account-style.css">
    <title>Create an account</title>
</head>
<body>
    <header>
        <div class="navbar">
        <h1 class="logo">TECH INFO</h1>
    
            <ul class="links">
                <li><a href="index.html">Events</a></li>
                <li><a href="results.html">Results</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        <div class="accountsection">
            <ul>
                <li><a href="account/signup.html">Sign up</a></li>
                <li>
                    <div class="signin-box">
                        <a href="account/signin.html">Sign in</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</header>
   <!-- end of header -->
    <section class="accountSection">

        <form id="signupForm" method="get">

            <div class="Auth-type">
                SignUp
            </div>
            <div class="container">
                
              <select name="branch" id="branch" aria-placeholder="Select Your Branch">
                    <option value="MASTER1-GLAA">MASTER1-GLAA</option>
                    <option value="MASTER1-RSD">MASTER1-RSD</option>
                    <option value="MASTER1-SI">MASTER1-SI</option>
                    <option value="MASTER1-SIAA">MASTER1-SIAA</option>
                    <option value="MASTER2-SIAA">MASTER2-SIAA</option>
                    <option value="MASTER2-SI">MASTER2-SI</option>
                    <option value="MASTER2-GLAA">MASTER2-GLAA</option>
                    <option value="MASTER2-RSD">MASTER2-RSD</option>
                </select> 
                
                <input type="email" id="emailInput"  placeholder="Enter your Email" required>
                <input id="passwordInput" type="password" placeholder="Enter your Password " required>
                <input id="passwrd" type="password" placeholder="Confirm your password" required>

            </div>
            <input type="submit" name="submit" value="Register Now" class="signUp">
            <p>Already have an accoount ? <a href="signin.php"> Login </a></p>
    </section>
    <script src="/dist/bundle.js"></script>
  
</body>

</html>