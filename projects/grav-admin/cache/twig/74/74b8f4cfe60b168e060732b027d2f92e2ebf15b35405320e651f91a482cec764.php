<?php

/* partials/tntsearch.html.twig */
class __TwigTemplate_ad0f1b10faec94edeab5e3aa9b4e25f374a15627f6e7e9721b3174a266896ba4 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'tntsearch_input' => array($this, 'block_tntsearch_input'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $context["url"] = ((array_key_exists("url", $context)) ? (_twig_default_filter((isset($context["url"]) ? $context["url"] : null), (($this->env->getExtension('Grav\Common\Twig\TwigExtension')->rtrimFilter((isset($context["base_url"]) ? $context["base_url"] : null), "/") . "/") . twig_trim_filter($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.query_route", 1 => "s"), "method"), "/")))) : ((($this->env->getExtension('Grav\Common\Twig\TwigExtension')->rtrimFilter((isset($context["base_url"]) ? $context["base_url"] : null), "/") . "/") . twig_trim_filter($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.query_route", 1 => "s"), "method"), "/"))));
        // line 2
        $context["limit"] = ((array_key_exists("limit", $context)) ? (_twig_default_filter((isset($context["limit"]) ? $context["limit"] : null), $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.limit", 1 => 20), "method"))) : ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.limit", 1 => 20), "method")));
        // line 3
        $context["snippet"] = ((array_key_exists("snippet", $context)) ? (_twig_default_filter((isset($context["snippet"]) ? $context["snippet"] : null), $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.snippet", 1 => 300), "method"))) : ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.snippet", 1 => 300), "method")));
        // line 4
        $context["min"] = ((array_key_exists("min", $context)) ? (_twig_default_filter((isset($context["min"]) ? $context["min"] : null), $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.min", 1 => 3), "method"))) : ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.min", 1 => 3), "method")));
        // line 5
        $context["search_type"] = ((array_key_exists("search_type", $context)) ? (_twig_default_filter((isset($context["search_type"]) ? $context["search_type"] : null), $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.search_type", 1 => "auto"), "method"))) : ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.search_type", 1 => "auto"), "method")));
        // line 6
        $context["placeholder"] = ((array_key_exists("placeholder", $context)) ? (_twig_default_filter((isset($context["placeholder"]) ? $context["placeholder"] : null), "Search...")) : ("Search..."));
        // line 7
        $context["live_update"] = (((isset($context["in_page"]) ? $context["in_page"] : null)) ? (((array_key_exists("live_update", $context)) ? (_twig_default_filter((isset($context["live_update"]) ? $context["live_update"] : null), $this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.live_uri_update", 1 => 1), "method"))) : ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.live_uri_update", 1 => 1), "method")))) : (0));
        // line 8
        echo "
";
        // line 9
        $context["options"] = array("uri" => (isset($context["url"]) ? $context["url"] : null), "limit" => (isset($context["limit"]) ? $context["limit"] : null), "snippet" => (isset($context["snippet"]) ? $context["snippet"] : null), "min" => (isset($context["min"]) ? $context["min"] : null), "in_page" => (isset($context["in_page"]) ? $context["in_page"] : null), "live_update" => (isset($context["live_update"]) ? $context["live_update"] : null), "search_type" => (isset($context["search_type"]) ? $context["search_type"] : null));
        // line 10
        echo "
<form role=\"form\" class=\"tntsearch-form\">
    ";
        // line 12
        $this->displayBlock('tntsearch_input', $context, $blocks);
        // line 20
        echo "    <div class=\"tntsearch-results";
        echo (((isset($context["in_page"]) ? $context["in_page"] : null)) ? (" tntsearch-results-inpage") : (""));
        echo "\">
    ";
        // line 21
        if (((array_key_exists("tntsearch_results", $context) &&  !twig_test_empty((isset($context["tntsearch_results"]) ? $context["tntsearch_results"] : null))) && (isset($context["in_page"]) ? $context["in_page"] : null))) {
            // line 22
            echo "        ";
            $this->loadTemplate("tntquery-ajax.html.twig", "partials/tntsearch.html.twig", 22)->display($context);
            // line 23
            echo "    ";
        }
        // line 24
        echo "    </div>

    <p class=\"tntsearch-powered-by\">
        Powered by <a href=\"https://github.com/trilbymedia/grav-plugin-tntsearch\" target=\"_blank\">TNTSearch</a>
    </p>
</form>
";
    }

    // line 12
    public function block_tntsearch_input($context, array $blocks = array())
    {
        // line 13
        echo "    <div id=\"tntsearch-wrapper\" class=\"form-group";
        echo (((isset($context["dropdown"]) ? $context["dropdown"] : null)) ? (" tntsearch-dropdown") : (""));
        echo "\">
        <input type=\"text\" class=\"form-control tntsearch-field";
        // line 14
        echo (((isset($context["in_page"]) ? $context["in_page"] : null)) ? (" tntsearch-field-inpage") : (""));
        echo "\" data-tntsearch=\"";
        echo twig_escape_filter($this->env, twig_jsonencode_filter((isset($context["options"]) ? $context["options"] : null)), "html_attr");
        echo "\" placeholder=\"";
        echo (isset($context["placeholder"]) ? $context["placeholder"] : null);
        echo "\" value=\"";
        echo (( !(isset($context["dropdown"]) ? $context["dropdown"] : null)) ? (twig_escape_filter($this->env, (isset($context["query"]) ? $context["query"] : null))) : (""));
        echo "\">
        ";
        // line 15
        if ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.built_in_css"), "method")) {
            // line 16
            echo "            <span class=\"tntsearch-clear\"";
            echo ((( !(isset($context["query"]) ? $context["query"] : null) || (isset($context["dropdown"]) ? $context["dropdown"] : null))) ? (" style=\"display: none;\"") : (""));
            echo ">&times;</span>
        ";
        }
        // line 18
        echo "    </div>
    ";
    }

    public function getTemplateName()
    {
        return "partials/tntsearch.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 18,  88 => 16,  86 => 15,  76 => 14,  71 => 13,  68 => 12,  58 => 24,  55 => 23,  52 => 22,  50 => 21,  45 => 20,  43 => 12,  39 => 10,  37 => 9,  34 => 8,  32 => 7,  30 => 6,  28 => 5,  26 => 4,  24 => 3,  22 => 2,  20 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set url = url|default(base_url|rtrim('/') ~ '/' ~ config.get('plugins.tntsearch.query_route', 's')|trim('/')) %}
{% set limit = limit|default(config.get('plugins.tntsearch.limit', 20)) %}
{% set snippet = snippet|default(config.get('plugins.tntsearch.snippet', 300)) %}
{% set min = min|default(config.get('plugins.tntsearch.min', 3)) %}
{% set search_type = search_type|default(config.get('plugins.tntsearch.search_type', 'auto')) %}
{% set placeholder = placeholder|default('Search...') %}
{% set live_update = in_page ? live_update|default(config.get('plugins.tntsearch.live_uri_update', 1)) : 0 %}

{% set options = { uri: url, limit: limit, snippet: snippet, min: min, in_page: in_page, live_update: live_update, search_type: search_type } %}

<form role=\"form\" class=\"tntsearch-form\">
    {% block tntsearch_input %}
    <div id=\"tntsearch-wrapper\" class=\"form-group{{ dropdown ? ' tntsearch-dropdown' : '' }}\">
        <input type=\"text\" class=\"form-control tntsearch-field{{ in_page ? ' tntsearch-field-inpage' : '' }}\" data-tntsearch=\"{{ options|json_encode|e('html_attr') }}\" placeholder=\"{{ placeholder }}\" value=\"{{ not dropdown ? query|e : '' }}\">
        {% if config.get('plugins.tntsearch.built_in_css') %}
            <span class=\"tntsearch-clear\"{{ not query or dropdown ? ' style=\"display: none;\"' : '' }}>&times;</span>
        {% endif %}
    </div>
    {% endblock %}
    <div class=\"tntsearch-results{{ in_page ? ' tntsearch-results-inpage' : '' }}\">
    {% if tntsearch_results is defined and tntsearch_results is not empty and in_page %}
        {% include 'tntquery-ajax.html.twig' %}
    {% endif %}
    </div>

    <p class=\"tntsearch-powered-by\">
        Powered by <a href=\"https://github.com/trilbymedia/grav-plugin-tntsearch\" target=\"_blank\">TNTSearch</a>
    </p>
</form>
", "partials/tntsearch.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/plugins/tntsearch/templates/partials/tntsearch.html.twig");
    }
}
