<?php

/* xrcollection.html.twig */
class __TwigTemplate_b88a547168e936e32363ef92d59e42d9d4cb8c5c8d7d3f7f049d42e867000d0f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $this->loadTemplate("xrcollection.html.twig", "xrcollection.html.twig", 1, "1826837200")->display($context);
        // line 35
        echo "






";
    }

    public function getTemplateName()
    {
        return "xrcollection.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  21 => 35,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% embed 'partials/base.html.twig' %}

\t{% set collection = page.collection() %}

\t{% block content %}


\t\t{% set blog_image = page.media.images|first.grayscale().contrast(20).brightness(-100).colorize(11,11,11) %}

\t\t{% if blog_image %}
\t\t<div class=\"flush-top blog-header blog-header-image\" style=\"background-image: url({{ blog_image.url }});\">
\t\t{% else %}
\t\t<div class=\"blog-header\">
\t\t{% endif %}
\t\t\t{{ page.content }}
\t\t</div>




\t\t{#\t
\t\t<ul>
\t\t{% for post in page.find('/collection').children.order('date', 'desc').slice(0, 5) %}
\t\t    <li class=\"recent-posts\">
\t\t        <strong><a href=\"{{ post.url }}\">{{ post.title }}</a></strong>
\t\t    </li>
\t\t{% endfor %}
\t\t</ul>
\t\t#}


\t{% endblock %}

{% endembed %}







", "xrcollection.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/themes/antimatter/templates/xrcollection.html.twig");
    }
}


/* xrcollection.html.twig */
class __TwigTemplate_b88a547168e936e32363ef92d59e42d9d4cb8c5c8d7d3f7f049d42e867000d0f_1826837200 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "xrcollection.html.twig", 1);
        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["collection"] = $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "collection", array(), "method");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 5
    public function block_content($context, array $blocks = array())
    {
        // line 6
        echo "

\t\t";
        // line 8
        $context["blog_image"] = $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(twig_first($this->env, $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "media", array()), "images", array())), "grayscale", array(), "method"), "contrast", array(0 => 20), "method"), "brightness", array(0 =>  -100), "method"), "colorize", array(0 => 11, 1 => 11, 2 => 11), "method");
        // line 9
        echo "
\t\t";
        // line 10
        if ((isset($context["blog_image"]) ? $context["blog_image"] : null)) {
            // line 11
            echo "\t\t<div class=\"flush-top blog-header blog-header-image\" style=\"background-image: url(";
            echo $this->getAttribute((isset($context["blog_image"]) ? $context["blog_image"] : null), "url", array());
            echo ");\">
\t\t";
        } else {
            // line 13
            echo "\t\t<div class=\"blog-header\">
\t\t";
        }
        // line 15
        echo "\t\t\t";
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
\t\t</div>




\t\t";
        // line 30
        echo "

\t";
    }

    public function getTemplateName()
    {
        return "xrcollection.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  164 => 30,  154 => 15,  150 => 13,  144 => 11,  142 => 10,  139 => 9,  137 => 8,  133 => 6,  130 => 5,  126 => 1,  124 => 3,  110 => 1,  21 => 35,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% embed 'partials/base.html.twig' %}

\t{% set collection = page.collection() %}

\t{% block content %}


\t\t{% set blog_image = page.media.images|first.grayscale().contrast(20).brightness(-100).colorize(11,11,11) %}

\t\t{% if blog_image %}
\t\t<div class=\"flush-top blog-header blog-header-image\" style=\"background-image: url({{ blog_image.url }});\">
\t\t{% else %}
\t\t<div class=\"blog-header\">
\t\t{% endif %}
\t\t\t{{ page.content }}
\t\t</div>




\t\t{#\t
\t\t<ul>
\t\t{% for post in page.find('/collection').children.order('date', 'desc').slice(0, 5) %}
\t\t    <li class=\"recent-posts\">
\t\t        <strong><a href=\"{{ post.url }}\">{{ post.title }}</a></strong>
\t\t    </li>
\t\t{% endfor %}
\t\t</ul>
\t\t#}


\t{% endblock %}

{% endembed %}







", "xrcollection.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/themes/antimatter/templates/xrcollection.html.twig");
    }
}
