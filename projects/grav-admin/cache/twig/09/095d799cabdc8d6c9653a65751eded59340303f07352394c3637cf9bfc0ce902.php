<?php

/* partials/xrblog_item.html.twig */
class __TwigTemplate_b6e14435c1de50c083503d470e05e01270fccfa36d6d103f64061bbf54a7478f extends Twig_Template
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
            echo "        <div class=\"list-item h-entry\" style=\"padding:0px;height:300px;background-position:center;background-size:cover;background-image: url(";
            echo $this->getAttribute((isset($context["header_image"]) ? $context["header_image"] : null), "url", array());
            echo ");\">
        ";
        } else {
            // line 14
            echo "        <div class=\"ist-item h-entry\">
        ";
        }
        // line 16
        echo "

    <div class=\"list-blog-header\" style=\"bottom:0px !important;width:100%;margin:0px;display:block;\">
        <span class=\"list-blog-date\">
            <time class=\"dt-published\" datetime=\"";
        // line 20
        echo twig_date_format_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "date", array()), "c");
        echo "\">
                <span>";
        // line 21
        echo twig_date_format_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "date", array()), "d");
        echo "</span>
                <em>";
        // line 22
        echo twig_date_format_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "date", array()), "M");
        echo "</em>
            </time>
       </span>
        ";
        // line 25
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "link", array())) {
            // line 26
            echo "            <h4 class=\"p-name\" style=\"width:100%;margin-top:0px !important;\">
                ";
            // line 27
            if ( !($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "continue_link", array()) === false)) {
                // line 28
                echo "                <a href=\"";
                echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
                echo "\"><i class=\"fa fa-angle-double-right u-url\"></i></a>
                ";
            }
            // line 30
            echo "                <a href=\"";
            echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "link", array());
            echo "\" class=\"u-url\">";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", array());
            echo "</a>
            </h4>
        ";
        } else {
            // line 33
            echo "            <h4 class=\"p-name\" style=\"padding:2%;background-color:rgba(255, 255, 255, 0.75);\"><a href=\"";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\" class=\"u-url\">";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", array());
            echo "</a></h4>
        ";
        }
        // line 35
        echo "
        ";
        // line 45
        echo "
    </div>

    <div class=\"list-blog-padding\">


    ";
        // line 51
        if (($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "continue_link", array()) === false)) {
            // line 52
            echo "        <div class=\"e-content\" style=\"display:inline-block;\">        
            ";
            // line 53
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
            echo "
        </div>
        ";
            // line 55
            if ( !(isset($context["truncate"]) ? $context["truncate"] : null)) {
                // line 56
                echo "        ";
                $context["show_prev_next"] = true;
                // line 57
                echo "        ";
            }
            // line 58
            echo "    ";
        } elseif (((isset($context["truncate"]) ? $context["truncate"] : null) && ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array()) != $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array())))) {
            // line 59
            echo "        <div class=\"p-summary e-content\">
            ";
            // line 60
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array(0 => 100), "method");
            echo "
            <p><a href=\"";
            // line 61
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\">";
            echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->translate("BLOG.ITEM.CONTINUE_READING");
            echo "</a></p>
        </div>
    ";
        } elseif (        // line 63
(isset($context["truncate"]) ? $context["truncate"] : null)) {
            // line 64
            echo "        <div class=\"p-summary e-content\">
            ";
            // line 65
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
            echo "
            <p><a href=\"";
            // line 66
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\">";
            echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->translate("BLOG.ITEM.CONTINUE_READING");
            echo "</a></p>
        </div>



    ";
        } else {
            // line 72
            echo "        <div class=\"e-content\">
            ";
            // line 73
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
            echo "
        </div>

        ";
            // line 76
            if ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "comments", array()), "enabled", array())) {
                // line 77
                echo "            ";
                $this->loadTemplate("partials/comments.html.twig", "partials/xrblog_item.html.twig", 77)->display($context);
                // line 78
                echo "        ";
            }
            // line 79
            echo "
        ";
            // line 80
            $context["show_prev_next"] = true;
            // line 81
            echo "    ";
        }
        // line 82
        echo "
    ";
        // line 83
        if ((isset($context["show_prev_next"]) ? $context["show_prev_next"] : null)) {
            // line 84
            echo "
            <p class=\"prev-next\">
                ";
            // line 86
            if ( !$this->getAttribute((isset($context["page"]) ? $context["page"] : null), "isFirst", array())) {
                // line 87
                echo "                    <a class=\"button\" href=\"";
                echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "nextSibling", array()), "url", array());
                echo "\"><i class=\"fa fa-chevron-left\"></i> ";
                echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->translate("BLOG.ITEM.NEXT_POST");
                echo "</a>
                ";
            }
            // line 89
            echo "
                ";
            // line 90
            if ( !$this->getAttribute((isset($context["page"]) ? $context["page"] : null), "isLast", array())) {
                // line 91
                echo "                    <a class=\"button\" href=\"";
                echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "prevSibling", array()), "url", array());
                echo "\">";
                echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->translate("BLOG.ITEM.PREV_POST");
                echo " <i class=\"fa fa-chevron-right\"></i></a>
                ";
            }
            // line 93
            echo "            </p>
    ";
        }
        // line 95
        echo "
    </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "partials/xrblog_item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  234 => 95,  230 => 93,  222 => 91,  220 => 90,  217 => 89,  209 => 87,  207 => 86,  203 => 84,  201 => 83,  198 => 82,  195 => 81,  193 => 80,  190 => 79,  187 => 78,  184 => 77,  182 => 76,  176 => 73,  173 => 72,  162 => 66,  158 => 65,  155 => 64,  153 => 63,  146 => 61,  142 => 60,  139 => 59,  136 => 58,  133 => 57,  130 => 56,  128 => 55,  123 => 53,  120 => 52,  118 => 51,  110 => 45,  107 => 35,  99 => 33,  90 => 30,  84 => 28,  82 => 27,  79 => 26,  77 => 25,  71 => 22,  67 => 21,  63 => 20,  57 => 16,  53 => 14,  47 => 12,  45 => 11,  42 => 10,  40 => 9,  36 => 7,  33 => 6,  30 => 5,  27 => 4,  24 => 3,  22 => 2,  19 => 1,);
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
        <div class=\"list-item h-entry\" style=\"padding:0px;height:300px;background-position:center;background-size:cover;background-image: url({{ header_image.url }});\">
        {% else %}
        <div class=\"ist-item h-entry\">
        {% endif %}


    <div class=\"list-blog-header\" style=\"bottom:0px !important;width:100%;margin:0px;display:block;\">
        <span class=\"list-blog-date\">
            <time class=\"dt-published\" datetime=\"{{ page.date|date(\"c\") }}\">
                <span>{{ page.date|date(\"d\") }}</span>
                <em>{{ page.date|date(\"M\") }}</em>
            </time>
       </span>
        {% if page.header.link %}
            <h4 class=\"p-name\" style=\"width:100%;margin-top:0px !important;\">
                {% if page.header.continue_link is not sameas(false) %}
                <a href=\"{{ page.url }}\"><i class=\"fa fa-angle-double-right u-url\"></i></a>
                {% endif %}
                <a href=\"{{ page.header.link }}\" class=\"u-url\">{{ page.title }}</a>
            </h4>
        {% else %}
            <h4 class=\"p-name\" style=\"padding:2%;background-color:rgba(255, 255, 255, 0.75);\"><a href=\"{{ page.url }}\" class=\"u-url\">{{ page.title }}</a></h4>
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

    </div>

    <div class=\"list-blog-padding\">


    {% if page.header.continue_link is sameas(false) %}
        <div class=\"e-content\" style=\"display:inline-block;\">        
            {{ page.content }}
        </div>
        {% if not truncate %}
        {% set show_prev_next = true %}
        {% endif %}
    {% elseif truncate and page.summary != page.content %}
        <div class=\"p-summary e-content\">
            {{ page.summary(100) }}
            <p><a href=\"{{ page.url }}\">{{ 'BLOG.ITEM.CONTINUE_READING'|t }}</a></p>
        </div>
    {% elseif truncate %}
        <div class=\"p-summary e-content\">
            {{ page.content }}
            <p><a href=\"{{ page.url }}\">{{ 'BLOG.ITEM.CONTINUE_READING'|t }}</a></p>
        </div>



    {% else %}
        <div class=\"e-content\">
            {{ page.content }}
        </div>

        {% if config.plugins.comments.enabled %}
            {% include 'partials/comments.html.twig' %}
        {% endif %}

        {% set show_prev_next = true %}
    {% endif %}

    {% if show_prev_next %}

            <p class=\"prev-next\">
                {% if not page.isFirst %}
                    <a class=\"button\" href=\"{{ page.nextSibling.url }}\"><i class=\"fa fa-chevron-left\"></i> {{ 'BLOG.ITEM.NEXT_POST'|t }}</a>
                {% endif %}

                {% if not page.isLast %}
                    <a class=\"button\" href=\"{{ page.prevSibling.url }}\">{{ 'BLOG.ITEM.PREV_POST'|t }} <i class=\"fa fa-chevron-right\"></i></a>
                {% endif %}
            </p>
    {% endif %}

    </div>
</div>
", "partials/xrblog_item.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/themes/antimatter/templates/partials/xrblog_item.html.twig");
    }
}
