/* global define, require, console */

define(["jquery", "app/utils"], function ($, Utils) {
    var section = $('<div class=".section"></div>'),
         email = 'mattbague'
             + '@'
             + 'gmail'
             + '.'
             + 'com',
        iconsPath = "personal/images/",
        header = Utils.createHeader('"Social media allows me to pick my times for social interaction."', '- Guy Kawasaki'),
        linkedinEntry = getContactFor(iconsPath + '/linked.png', 'Connect with me on LinkedIn', 'http://www.linkedin.com/in/matthewbague', 'linkedin-image'),
        phoneEntry = getContactFor(iconsPath + '/phone.png', '(Cell)', 'tel:', 'phone-image'),
        emailEntryTemp = getContactFor(iconsPath + '/email.png', email, 'mailto:mattbague@gmail.com', 'email-image'),
        emailEntry = getEmailForm(sendEmailForm());


    function getContactFor(image, text, link, imageClass) {
        var linkContainer = $('<div></div>'),
            linkOut = $('<a></a>').attr('href', link).attr('target', '_blank').text(text).addClass('contact-link'),
            linkImage = $('<img/>').attr('src', image).addClass(imageClass);

        linkOut.prepend(linkImage);

        linkContainer
            .append(linkOut);

        return linkContainer;
    }

    function createFormComponent(formType, labelText, name) {
        var textInputContainer = $('<div></div>').addClass('form-component'),
            textLabel = $('<label for="' + name + '"></label>').text(labelText + ':'),
            textInput = $('<input type="' + formType + '" name="' + name + '">').attr('size', 30);

        textInputContainer
            .append(textLabel)
            .append($('<br/>'))
            .append(textInput);

        return textInputContainer
    }

    function createTextField(cols, rows, labelText, name) {
        var textAreaContainer = $('<div></div>').addClass('form-component'),
            textLabel = $('<label for="' + name + '"></label>').text(labelText + ':'),
            textArea = $('<textarea cols="' + cols + '" rows="' + rows + '" name="' + name + '">');

        textAreaContainer
            .append(textLabel)
            .append(textArea);

        return textAreaContainer;
    }

    function sendEmailForm() {

    }

    function getEmailForm(onSend) {
        var formContainer = $('<div></div>'),
            form = $('<form></form>').addClass('email-form').submit(function () {
                form.preventDefault();
                form.each(function () {
                        this.text('');
                    }
                );
                return false;
            }),
            formImage = $('<img/>').attr('src', iconsPath + 'email.png').addClass('email-image'),
            formTitle = $('<h2/>').text('Send me a message below!').addClass('email-form-header').prepend(formImage),
            senderInput = createFormComponent('text', 'Your Name', 'sender'),
            replyToInput = createFormComponent('email', 'Your E-mail', 'email'),
            companyInput = createFormComponent('text', 'Your Company', 'company'),
            emailMessage = createTextField(60, 10, 'Message', 'message'),
            submitButton = $('<input type="button"/>').val('Submit').addClass('form-component');

        form
            .append(senderInput)
            .append(replyToInput)
            .append(companyInput)
            .append(emailMessage)
            .append(submitButton);

        formContainer
            .append(formTitle)
            .append(form);

        return formContainer
    }

    function getTempEmail() {
        return $('div')
    }

    section
        .append(header)
        .append(linkedinEntry)
        //.append(phoneEntry)
        .append(emailEntryTemp)
        //.append(emailEntry);
    ;

    return section;
});