function Error(message_acc, code_acc) {
    var message = message_acc;
    var code = code_acc;
    var name = 'Ошибка ввода';

    this.getMessage = function()  {
        return message;
    }

    this.getCode = function()  {
        return code;
    }

    this.getName = function()  {
        return name;
    }

    this.setMessage =  function(value)  {
        message = value;
    }

    this.setCode = function(value)  {
        code = value;
    }
}

function ErrorInput(message_acc, code_acc, cause_acc)  {
    Error.call(this, message_acc, code_acc);
    var cause = cause_acc;
    this.getCouse = function()  {
        return cause;
    }
    this.setCause = function(value)  {
        cause = value;
    }
    this.showAll = function()  {
        alert('Error: ' + this.getCode() + ' ' + this.getName() + ' ' + cause + ' ' + this.getMessage());
    }
    this.showMessege = function()  {
        showMes(this.getMessage());
    }
}

Buffer = {
    Name : "",
    Age : "",
    login : "",
    password : "",

    getName: function()  {
        return this.Name;
    },

    getAge : function()  {
        return this.Age;
    },

    getLogin: function()  {
        return this.login;
    },

    getPassword : function()  {
        return this.password;
    },

    setName : function(value)  {
        this.Name = value;
    },

    setAge : function(value)  {
        this.Age = value;
    },

    setLogin : function(value)  {
        this.login = value;
    },

    setPassword : function(value)  {
        this.password = value;
    }
}

Check = {
    check : 0,

    getCheck: function()  {
        return this.check;
    },

    setCheck : function(value)  {
        this.check = value;
    }
}


function backspaceAll(id)  {
    var item = document.getElementById(id);
    item.value = "";
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function showMes(message) {
    var id = 'mess';
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.display = 'block';
    setTimeout(function() {hide(id);}, 3000);
}

function checkValidLogin(id) {
    var item = document.getElementById(id);
    var str = item.value;
    try  {
        if (str.length > 25) throw new ErrorInput('Введено слишком много символов', '3', 'Overloaded field');
        for (var i = 0; i < str.length; i++)
            if (str[i] == ' ') throw new ErrorInput('Нажат пробел', '2', 'Unacceptable symbol');
        if (str[0] >= '0' && str[0] <= '9') throw new ErrorInput('Логин не может начинаться с цифры', '5', 'Unacceptable symbol');
        if (str[0] == '_') throw new ErrorInput('Логин не может начинаться с символа \'_\'', '5', 'Unacceptable symbol');
        for (var i = 0; i < str.length; i++)
            if ((str[i]!='_') && (str[i] < 'a' || str[i] > 'z') && (str[i] < 'A' || str[i] > 'Z') && (str[i] < '0' || str[i] > '9')) throw new ErrorInput('Введено недопустимое значение\nДопустимые: A-z, 0-9', '1', 'Unacceptable symbol');
        Buffer.setLogin(str);
    }
    catch (e) {
        e.showMessege();
        item.value = Buffer.getLogin();
    }
}

function checkValidAge(id) {
    var item = document.getElementById(id);
    var str = item.value;
    try  {
        if (str.length > 3) throw new ErrorInput('Введено слишком много символов', '3', 'Overloaded field');
        for (var i = 0; i < str.length; i++)
            if (str[i] == ' ') throw new ErrorInput('Нажат пробел', '2', 'Unacceptable symbol');
        for (var i = 0; i < str.length; i++)
            if (str[i] < '0' || str[i] > '9') throw new ErrorInput('Введено недопустимое значение\nДопустимые: 0-9', '1', 'Unacceptable symbol');
        if (str.length>0 && (parseInt(str)<1 || parseInt(str)>120)) throw new ErrorInput('Введено недопустимое значение\nДопустимые: 7-120', '1', 'Unacceptable symbol');
        Buffer.setAge(str);
    }
    catch (e) {
        e.showMessege();
        item.value = Buffer.getAge();
    }
}

function checkValidAgeEnd(id) {
    var item = document.getElementById(id);
    var str = item.value;
    try  {
        if (str.length>0 && (parseInt(str)<7 || parseInt(str)>120)) throw new ErrorInput('Введено недопустимое значение\nДопустимые: 7-120', '1', 'Unacceptable symbol');
        Buffer.setAge(str);
    }
    catch (e) {
        e.showMessege();
        Buffer.setAge('');
        item.value = Buffer.getAge();
    }
}

function checkValidEmail(id) {
    var item = document.getElementById(id);
    var str = item.value;
    var regular = /\b[a-z]\w+@[a-z]+\.[a-z]+\b/;
    try  {
        if (str.length > 30) throw new ErrorInput('Введено слишком много символов', '3', 'Overloaded field');
        if(resultCheck(id)) return;
        if (!regular.test(str)) throw new ErrorInput('Некорректная форма e-mail почты', '6', 'Wrong form of statement');
    }
    catch (e) {
        e.showMessege();
        backspaceAll(id);
    }
}

function checkValidPassword(id) {
    var item = document.getElementById(id);
    var str = item.value;
    var counterLowerCaseLetter = 0;
    var counterUpperCaseLetter = 0;
    var counterNumber = 0;
    try {
        if (str.length > 25) throw new ErrorInput('Введено слишком много символов', '3', 'Overloaded field');
        for (var i = 0; i < str.length; i++) {
            if ((str[i] > 'a' && str[i] < 'z') || (str[i] > 'а' && str[i] < 'я')) counterLowerCaseLetter++;
            if ((str[i] > 'A' && str[i] < 'Z') || (str[i] > 'А' && str[i] < 'Я')) counterUpperCaseLetter++;
            if (str[i] > '0' && str[i] < '9') counterNumber++
        }
        if(str.length!=0 &&(counterLowerCaseLetter==0 || counterUpperCaseLetter==0 || counterNumber==0)) {
            Buffer.setPassword('');
            throw new ErrorInput('Слабый пароль\nне менее одной буквы в каждом регистре\nи не менее одной цифры', '7', 'Weak password');
        }
        Buffer.setPassword(str);
    }
    catch (e) {
        e.showMessege();
        item.value = Buffer.getPassword();
    }
}

function resultCheckName(id)  {
    if ((document.getElementById(id).value.length < 2) && (document.getElementById(id).value.length != 0))  {
        showMes('Должно быть введено минимум 2 символа');
        document.getElementById(id).focus();
    }
}

function resultCheck(id)  {
    if ((document.getElementById(id).value.length < 5) && (document.getElementById(id).value.length != 0))  {
        showMes('Должно быть введено минимум 5 символов');
        document.getElementById(id).focus();
        return true;
    }
    return false;
}

function checkAll()  {
    var counter = 0;
    if (document.getElementById('Name').value.length >= 5) counter++;
    if (document.getElementById('Password').value.length >= 6) counter++;
    if (document.getElementById('Age').value.length >= 1) counter++;
    if (document.getElementById('Email').value.length >= 5) counter++;
    for (var i = 0; i < document.getElementsByName('Quest').length; i++) {
        if (document.getElementsByName('Quest')[i].checked)
            counter++;
    }

    if (counter == 5) {
        showMes('Регистрация прошла успешно');
        Check.setCheck(1);
    }
    else  {
        showMes('Все поля должны быть заполнены');
        Check.setCheck(0);
    }
    return Check.getCheck();
}

function addEmail() {
    var label = document.createElement('label');
    label.setAttribute("id", "lab");
    var span = document.createElement('span');
    span.appendChild( document.createTextNode("Email 2") );
    label.appendChild(span);
    var input = document.createElement('input');
    input.className = "in";
    input.setAttribute("type", "text");
    input.setAttribute("name", "Email1");
    input.setAttribute("id", "Email1");
    input.setAttribute("size", "25");
    input.addEventListener("change", function() {
        checkValidEmail('Email1');
    });
    label.appendChild(input);
    var but = document.createElement('input');
    but.className = "buttonMenu";
    but.setAttribute("type", "button");
    but.setAttribute("id", "but");
    but.setAttribute("value", "Удалить");
    but.addEventListener("click", function() {
        document.getElementById("add").disabled = false;
        document.getElementById('EmailForms').removeChild(document.getElementById('lab'));
        document.getElementById('EmailForms').removeChild(document.getElementById('but'));
        document.getElementById("table").style.height = "470px";
    });
    document.getElementById('EmailForms').appendChild(label);
    document.getElementById('EmailForms').appendChild(but);
    document.getElementById("add").disabled = true;
    document.getElementById("table").style.height = "520px";
}