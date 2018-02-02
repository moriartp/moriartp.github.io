---
title: 'Submit Work for Promotion'
visible: false
form:
    name: my-nice-form
    fields:
        -
            name: name
            label: Name
            placeholder: 'Enter your name'
            autofocus: 'on'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: 'Enter your email address'
            type: text
            validate:
                rule: email
                required: true
        -
            name: message
            label: Message
            size: long
            placeholder: 'Tell us about your work'
            type: textarea
            validate:
                required: true
        -
            name: url
            label: URL
            placeholder: 'Provide a link your site'
            type: textarea
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Submit
            classes: 'gdlr-button with-border excerpt-read-more'
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to: ['{{ config.plugins.email.from }}', '{{ form.value.email }}']
                subject: '[Feedback] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for sharing your work!'
---

####Submit Your Work
<p>Let others know about the research and devlopment work you are doing in XR related technology by submitting a brief description and a link to an an external page where we can learn more about your project or research.</p>