<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/main.css">
    <title>Tech info</title>
</head>
<body>
    <header>
<div class="navbar">
    <h1 class="logo"><span>Tech</span>info</h1>
    
        <ul class="links">
            <li><a href="index.html">Events</a></li>
            <li><a href="results.html">Results</a></li>
            <li><a href="projects.html">Projects</a></li>
        </ul>
    <div class="accountsection">
        <ul>
            <li><a href="account/signup.html">Signup</a></li>
            <li>
                <div class="signin-box">
                    <a href="account/signin.html">Signin</a>
                </div>
            </li>
        </ul>
    </div>
</div>
</header>
 <!--end of header-->
<!-- events list -->
<section class="events-lists">
    <label for="branch"class="filter">Branch:</label>
                <!-- <drop down menu for filtering the events> -->
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
                
  <!--Every single event container-->
<ul class="events">
    
        <!-- * data from firestore goes in here -->

      
</ul>
 </section>
 <script src="/dist/bundle.js"></script>
</body>

</html>