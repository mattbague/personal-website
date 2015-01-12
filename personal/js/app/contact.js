/* global define, require, console */

define(["jquery"], function ($) {
    var section = $('<div class=".section"></div>'),
        header = $('<h3></h3>').addClass('section-header').html('"Social media allows me to pick my times for social interaction."<br/>- Guy Kawasaki'),
        linkedinEntry = getContactFor('icons/linked.png', 'Connect with me on LinkedIn', 'http://www.linkedin.com/in/matthewbague', 'linkedin-image'),
        phoneEntry = getContactFor('icons/phone.png', '805.630.8700 (Cell)', '', 'phone-image'),
        emailEntry = getEmailForm(sendEmailForm());

    function getContactFor(image, text, link, imageClass) {
        var linkContainer = $('<div></div>'),
            linkOut = $('<a></a>').attr('src', link).attr('target', '_blank').text(text).addClass('contact-link'),
            linkImage = $('<img/>').attr('src', image).addClass(imageClass);

        linkContainer
            .append(linkImage)
            .append(linkOut)

        return linkContainer;
    }

    function createFormComponent(formType, labelText, name) {
        var textInputContainer = $('<div></div>').addClass('form-component'),
            textLabel = $('<label for="' + name + '"></label>').text(labelText + ':'),
            textInput = $('<input type="' + formType + '" name="' + name + '">');

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
        var formContainer = $('<div></div>').addClass('email-form'),
            form = $('<form></form>').submit(function() {
                form.preventDefault();
                form.each(function() {
                        this.text('');
                    }
                );
                return false;
            }),
            formTitle = $('<h3></h3>').text('Send me a message!').addClass('email-form-header'),
            senderInput = createFormComponent('text', 'Name', 'sender'),
            replyToInput = createFormComponent('email', 'E-mail', 'email'),
            companyInput = createFormComponent('text', 'Company', 'company'),
            emailMessage = createTextField(68, 10, 'Message', 'message'),
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

    section
        .append(header)
        .append(linkedinEntry)
        .append(phoneEntry)
        .append(emailEntry);

    return section;
});