<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <div class="zag">
        <p>Обработка данных из форм</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 offset md-6">
                <form>
                    <div class="mb-3">
                        <label for="name">Имя</label>
                        <input name="name" type="text" class="form-control" id="name">
                    </div>

                    <div class="mb-3">
                        <label for="email">Email</label>
                        <input name="email" type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="adress">Адрес</label>
                        <input name = "adress" type="text" class="form-control" id="adress">   
                    </div>
                    <div class="mb-3">
                        <label for="phone">Телефон</label>
                        <input name = "phone" type="phone" class="form-control" id="phone">   
                    </div>
                    <div class="mb-3">
                        <label for="comment">Комментарий</label>
                        <textarea name = "comment" type="email" class="form-control" id="comment" rows="3"></textarea>   
                    </div>
                    <button type="submit" class="btn btn-primary">Отправить</button>
                </form>
            </div>
        </div>
    </div>
</body>

</html>