<?php

/* partials/xrbl0g_item.html.twig */
class __TwigTemplate_158ce1f2acd704136a80da5b37031fc20300a85dc0547c9027ae411b224750be extends Twig_Template
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
        echo "
    ";
        // line 2
        $context["header_image"] = $this->env->getExtension('Grav\Common\Twig\TwigExtension')->definedDefaultFilter($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "header_image", array()), true);
        // line 3
        echo "    ";
        $context["header_image_width"] = $this->env->getExtension('Grav\Common\Twig\TwigExtension')->definedDefaultFilter($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "header_image_width", array()), 1200);
        // line 4
        echo "    ";
        $context["header_image_height"] = $this->env->getExtension('Grav\Common\Twig\TwigExtension')->definedDefaultFilter($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "header_image_height", array()), 200);
        // line 5
        echo "    ";
        $context["header_image_file"] = $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "header_image_file", array());
        // line 6
        echo "    ";
        $context["header_image_file_url"] = $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "header_image_file", array()), "url", array(), "method");
        // line 7
        echo "

    ";
        // line 9
        $context["header_image"] = twig_first($this->env, $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "media", array()), "images", array()));
        // line 10
        echo "
        ";
        // line 11
        if ((isset($context["header_image"]) ? $context["header_image"] : null)) {
            // line 12
            echo "        <div class=\"bl0gp0st\" style=\"background-position:center;background-size:cover;background-image: url(";
            echo $this->getAttribute((isset($context["header_image"]) ? $context["header_image"] : null), "url", array());
            echo ");\">
        ";
        } else {
            // line 14
            echo "        <div class=\"bl0gp0st\" style=\"background-position:center;background-size:cover;background-image: url(/images/4/5/5/0/d/4550d1af389520932c40b4f5c77f574e081a074a-post-it.jpeg);\">
        ";
        }
        // line 16
        echo "

        ";
        // line 19
        echo "        ";
        // line 25
        echo "



       ";
        // line 30
        echo "        ";
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "link", array())) {
            // line 31
            echo "            <div class=\"bl0gp0st-content\" style=\"display:block;\">
                ";
            // line 32
            if ( !($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "continue_link", array()) === false)) {
                // line 33
                echo "                <h3><a href=\"";
                echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
                echo "\"><i class=\"fa fa-angle-double-right u-url\"></i></a></h3>
                ";
            }
            // line 35
            echo "                <h3><a href=\"";
            echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "link", array());
            echo "\" class=\"bl0gp0st-url\">";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", array());
            echo "</a></h3>
            <div class=\"bl0gp0st-summary\">";
            // line 36
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array(0 => 100), "method");
            echo "</div>
            </div>
        ";
        } else {
            // line 39
            echo "            <div class=\"bl0gp0st-name\" style=\"display:block;\"><h3><a href=\"";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\" class=\"bl0gp0st-url\">";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", array());
            echo "</a></h3><div class=\"bl0p0st-summary\">";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array(0 => 100), "method");
            echo "</a></div></div>

        ";
        }
        // line 42
        echo "











        ";
        // line 63
        echo "




";
        // line 116
        echo "

</div>


";
    }

    public function getTemplateName()
    {
        return "partials/xrbl0g_item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 116,  121 => 63,  107 => 42,  96 => 39,  90 => 36,  83 => 35,  77 => 33,  75 => 32,  72 => 31,  69 => 30,  63 => 25,  61 => 19,  57 => 16,  53 => 14,  47 => 12,  45 => 11,  42 => 10,  40 => 9,  36 => 7,  33 => 6,  30 => 5,  27 => 4,  24 => 3,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("
    {% set header_image = page.header.header_image|defined(true) %}
    {% set header_image_width  = page.header.header_image_width|defined(1200) %}
    {% set header_image_height = page.header.header_image_height|defined(200) %}
    {% set header_image_file = page.header.header_image_file %}
    {% set header_image_file_url = page.header.header_image_file.url() %}


    {% set header_image = page.media.images|first %}

        {% if header_image %}
        <div class=\"bl0gp0st\" style=\"background-position:center;background-size:cover;background-image: url({{ header_image.url }});\">
        {% else %}
        <div class=\"bl0gp0st\" style=\"background-position:center;background-size:cover;background-image: url(/images/4/5/5/0/d/4550d1af389520932c40b4f5c77f574e081a074a-post-it.jpeg);\">
        {% endif %}


        {# PAGE DATE #}
        {#<span class=\"list-blog-date\">
            <time class=\"dt-published\" datetime=\"{{ page.date|date(\"c\") }}\">
                <span>{{ page.date|date(\"d\") }}</span>
                <em>{{ page.date|date(\"M\") }}</em>
            </time>
       </span>#}




       {# PAGE HEADER LINK #}
        {% if page.header.link %}
            <div class=\"bl0gp0st-content\" style=\"display:block;\">
                {% if page.header.continue_link is not sameas(false) %}
                <h3><a href=\"{{ page.url }}\"><i class=\"fa fa-angle-double-right u-url\"></i></a></h3>
                {% endif %}
                <h3><a href=\"{{ page.header.link }}\" class=\"bl0gp0st-url\">{{ page.title }}</a></h3>
            <div class=\"bl0gp0st-summary\">{{ page.summary(100) }}</div>
            </div>
        {% else %}
            <div class=\"bl0gp0st-name\" style=\"display:block;\"><h3><a href=\"{{ page.url }}\" class=\"bl0gp0st-url\">{{ page.title }}</a></h3><div class=\"bl0p0st-summary\">{{ page.summary(100) }}</a></div></div>

        {% endif %}












        {#START TAGS 
        {% if page.taxonomy.tag %}
        <span class=\"tags\">
            {% for tag in page.taxonomy.tag %}
            <a href=\"{{ blog.url|rtrim('/') }}/tag{{ config.system.param_sep }}{{ tag }}\" class=\"p-category\">{{ tag }}</a>
            {% endfor %}
        </span>
        {% endif %}
        END TAGS#}





{#
    {% if page.header.continue_link is sameas(false) %}
       
            {{ page.content }}

        {% if not truncate %}
        {% set show_prev_next = true %}
        {% endif %}
    {% elseif truncate and page.summary != page.content %}

            {{ page.summary(100) }}
            <p><a href=\"{{ page.url }}\">{{ 'BLOG.ITEM.CONTINUE_READING'|t }}</a></p>

    {% elseif truncate %}

            {{ page.content }}
            <p><a href=\"{{ page.url }}\">{{ 'BLOG.ITEM.CONTINUE_READING'|t }}</a></p>




    {% else %}

            {{ page.content }}




        {% if config.plugins.comments.enabled %}
            {% include 'partials/comments.html.twig' %}
        {% endif %}

        {% set show_prev_next = true %}
    {% endif %}

    {% if show_prev_next %}
            <div id=\"'\"paginator\" style=\"display:block;\">
            <p class=\"prev-next\">
                {% if not page.isFirst %}
                    <a class=\"button\" href=\"{{ page.nextSibling.url }}\"><i class=\"fa fa-chevron-left\"></i> {{ 'BLOG.ITEM.NEXT_POST'|t }}</a>
                {% endif %}

                {% if not page.isLast %}
                    <a class=\"button\" href=\"{{ page.prevSibling.url }}\">{{ 'BLOG.ITEM.PREV_POST'|t }} <i class=\"fa fa-chevron-right\"></i></a>
                {% endif %}
            </p></div>
    {% endif %}
    #}


</div>


", "partials/xrbl0g_item.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/themes/antimatter/templates/partials/xrbl0g_item.html.twig");
    }
}
