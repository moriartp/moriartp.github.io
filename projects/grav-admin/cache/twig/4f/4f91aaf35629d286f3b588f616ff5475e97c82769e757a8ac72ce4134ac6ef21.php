<?php

/* xrblog.html.twig */
class __TwigTemplate_74ed55e547f50203c728685023c7ead5e4fea6d1b158176f5c9bc831f3f6e898 extends Twig_Template
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
        $this->loadTemplate("xrblog.html.twig", "xrblog.html.twig", 1, "2027665231")->display($context);
        // line 58
        echo "

";
    }

    public function getTemplateName()
    {
        return "xrblog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  21 => 58,  19 => 1,);
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

\t\t\t{% if config.plugins.breadcrumbs.enabled %}
\t\t\t\t{% include 'partials/breadcrumbs.html.twig' %}
\t\t\t{% endif %}
\t





\t\t<div class=\"content-wrapper blog-content-list grid pure-g\">
\t\t\t<div id=\"listing\" class=\"block pure-u-2-3 h-feed\">
\t\t\t\t{% for child in collection %}
\t\t\t        {% include 'partials/xrblog_item.html.twig' with {'blog':page, 'page':child, 'truncate':true} %}
\t\t\t    {% endfor %}

                {% if config.plugins.pagination.enabled and collection.params.pagination %}
                    {% include 'partials/pagination.html.twig' with {'base_url':page.url, 'pagination':collection.params.pagination} %}
                {% endif %}
\t\t\t</div>

\t\t\t<div id=\"sidebar\" class=\"block size-1-3 pure-u-1-3\">








\t\t\t\t{% include 'partials/xrsidebar.html.twig' with {'blog':page} %}
\t\t\t</div>




\t\t</div>
\t{% endblock %}

{% endembed %}


", "xrblog.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/themes/antimatter/templates/xrblog.html.twig");
    }
}


/* xrblog.html.twig */
class __TwigTemplate_74ed55e547f50203c728685023c7ead5e4fea6d1b158176f5c9bc831f3f6e898_2027665231 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "xrblog.html.twig", 1);
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
        // line 9
        $context["blog_image"] = $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(twig_first($this->env, $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "media", array()), "images", array())), "grayscale", array(), "method"), "contrast", array(0 => 20), "method"), "brightness", array(0 =>  -100), "method"), "colorize", array(0 => 11, 1 => 11, 2 => 11), "method");
        // line 10
        echo "
\t\t";
        // line 11
        if ((isset($context["blog_image"]) ? $context["blog_image"] : null)) {
            // line 12
            echo "\t\t<div class=\"flush-top blog-header blog-header-image\" style=\"background-image: url(";
            echo $this->getAttribute((isset($context["blog_image"]) ? $context["blog_image"] : null), "url", array());
            echo ");\">
\t\t";
        } else {
            // line 14
            echo "\t\t<div class=\"blog-header\">
\t\t";
        }
        // line 16
        echo "\t\t\t";
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
\t\t</div>

\t\t\t";
        // line 19
        if ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "breadcrumbs", array()), "enabled", array())) {
            // line 20
            echo "\t\t\t\t";
            $this->loadTemplate("partials/breadcrumbs.html.twig", "xrblog.html.twig", 20)->display($context);
            // line 21
            echo "\t\t\t";
        }
        // line 22
        echo "\t





\t\t<div class=\"content-wrapper blog-content-list grid pure-g\">
\t\t\t<div id=\"listing\" class=\"block pure-u-2-3 h-feed\">
\t\t\t\t";
        // line 30
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["collection"]) ? $context["collection"] : null));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
            // line 31
            echo "\t\t\t        ";
            $this->loadTemplate("partials/xrblog_item.html.twig", "xrblog.html.twig", 31)->display(array_merge($context, array("blog" => (isset($context["page"]) ? $context["page"] : null), "page" => $context["child"], "truncate" => true)));
            // line 32
            echo "\t\t\t    ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "
                ";
        // line 34
        if (($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "pagination", array()), "enabled", array()) && $this->getAttribute($this->getAttribute((isset($context["collection"]) ? $context["collection"] : null), "params", array()), "pagination", array()))) {
            // line 35
            echo "                    ";
            $this->loadTemplate("partials/pagination.html.twig", "xrblog.html.twig", 35)->display(array_merge($context, array("base_url" => $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array()), "pagination" => $this->getAttribute($this->getAttribute((isset($context["collection"]) ? $context["collection"] : null), "params", array()), "pagination", array()))));
            // line 36
            echo "                ";
        }
        // line 37
        echo "\t\t\t</div>

\t\t\t<div id=\"sidebar\" class=\"block size-1-3 pure-u-1-3\">








\t\t\t\t";
        // line 48
        $this->loadTemplate("partials/xrsidebar.html.twig", "xrblog.html.twig", 48)->display(array_merge($context, array("blog" => (isset($context["page"]) ? $context["page"] : null))));
        // line 49
        echo "\t\t\t</div>




\t\t</div>
\t";
    }

    public function getTemplateName()
    {
        return "xrblog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  253 => 49,  251 => 48,  238 => 37,  235 => 36,  232 => 35,  230 => 34,  227 => 33,  213 => 32,  210 => 31,  193 => 30,  183 => 22,  180 => 21,  177 => 20,  175 => 19,  168 => 16,  164 => 14,  158 => 12,  156 => 11,  153 => 10,  151 => 9,  146 => 6,  143 => 5,  139 => 1,  137 => 3,  123 => 1,  21 => 58,  19 => 1,);
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

\t\t\t{% if config.plugins.breadcrumbs.enabled %}
\t\t\t\t{% include 'partials/breadcrumbs.html.twig' %}
\t\t\t{% endif %}
\t





\t\t<div class=\"content-wrapper blog-content-list grid pure-g\">
\t\t\t<div id=\"listing\" class=\"block pure-u-2-3 h-feed\">
\t\t\t\t{% for child in collection %}
\t\t\t        {% include 'partials/xrblog_item.html.twig' with {'blog':page, 'page':child, 'truncate':true} %}
\t\t\t    {% endfor %}

                {% if config.plugins.pagination.enabled and collection.params.pagination %}
                    {% include 'partials/pagination.html.twig' with {'base_url':page.url, 'pagination':collection.params.pagination} %}
                {% endif %}
\t\t\t</div>

\t\t\t<div id=\"sidebar\" class=\"block size-1-3 pure-u-1-3\">








\t\t\t\t{% include 'partials/xrsidebar.html.twig' with {'blog':page} %}
\t\t\t</div>




\t\t</div>
\t{% endblock %}

{% endembed %}


", "xrblog.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/themes/antimatter/templates/xrblog.html.twig");
    }
}
