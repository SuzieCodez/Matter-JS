# Matter-JS
This repository has some basic examples of matter.js- the physics engine, to get you started.

Update the index.html file everytime you change to any other script,

For eg, if you want to run the boxes.js file then your html file should be updated to:
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slingshot</title>
    <style>
        p {
            text-align: center;
            font-size: large;
        }
    </style>
</head>

<body>

    <p>
        Drop all the polygons down by shooting the slingshot
    </p>
    <script src="matter.js" type="text/javascript"></script>
    <script src="p5.min.js"></script>
    <script src="boxes.js"></script>
</body>

</html>
```