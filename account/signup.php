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
    <?php include('header.php'); ?>
    <!-- end of header -->
    <section class="accountSection">

        <form id="signupForm" method="get">

            <div class="Auth-type">
                SignUp
            </div>
            <div class="container">
                <label for="branch">Branch:</label>
             <br>
              <select name="branch" id="branch">
                    <option value="MASTER1-GLAA">MASTER1-GLAA</option>
                    <option value="MASTER1-RSD">MASTER1-RSD</option>
                    <option value="MASTER1-SI">MASTER1-SI</option>
                    <option value="MASTER1-SIAA">MASTER1-SIAA</option>
                    <option value="MASTER2-SIAA">MASTER2-SIAA</option>
                    <option value="MASTER2-SI">MASTER2-SI</option>
                    <option value="MASTER2-GLAA">MASTER2-GLAA</option>
                    <option value="MASTER2-RSD">MASTER2-RSD</option>
                </select> 
                <br>
                <label for="email">Email</label>
                <br>
                <input type="email" id="emailInput" required>
                <br>
                <label for="psw">Password</label>
                <br>
                <input id="passwordInput" type="password" required>
                <br>
            </div>
            <button type="submit" class="signUp">Signup</button> 
    </section>
    <script src="/dist/bundle.js"></script>
  
</body>

</html>