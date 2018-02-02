<?php

/* tntquery-ajax.html.twig */
class __TwigTemplate_025af11e5416e51a1545c1b6d1dda59b21c7a31fc1b5f9c309b8d8afbf5837f4 extends Twig_Template
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
        echo "<div class=\"row\">
    <p class=\"info\">
        ";
        // line 3
        if ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.display_hits"), "method")) {
            // line 4
            echo "            <span class=\"hits\">Found ";
            echo $this->getAttribute((isset($context["tntsearch_results"]) ? $context["tntsearch_results"] : null), "number_of_hits", array());
            echo " results</span>
        ";
        }
        // line 6
        echo "        ";
        if ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.display_time"), "method")) {
            // line 7
            echo "            <span class=\"time\">in  <span>  ";
            echo $this->getAttribute((isset($context["tntsearch_results"]) ? $context["tntsearch_results"] : null), "execution_time", array());
            echo "</span></span>
        ";
        }
        // line 9
        echo "    </p>
    ";
        // line 10
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["tntsearch_results"]) ? $context["tntsearch_results"] : null), "hits", array()));
        foreach ($context['_seq'] as $context["key"] => $context["val"]) {
            // line 11
            echo "        <h5 class=\"title\">
            <a href=\"";
            // line 12
            echo ((isset($context["base_url"]) ? $context["base_url"] : null) . $this->getAttribute($context["val"], "link", array()));
            echo "\">";
            echo $this->getAttribute($context["val"], "title", array());
            echo "</a>
        </h5>
        ";
            // line 14
            if ($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "get", array(0 => "plugins.tntsearch.display_route"), "method")) {
                // line 15
                echo "            <h6 class=\"route\">";
                echo $this->getAttribute($context["val"], "link", array());
                echo "</h6>
        ";
            }
            // line 17
            echo "        <p>";
            echo $this->getAttribute($context["val"], "content", array());
            echo "</p>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['val'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "</div>";
    }

    public function getTemplateName()
    {
        return "tntquery-ajax.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 19,  65 => 17,  59 => 15,  57 => 14,  50 => 12,  47 => 11,  43 => 10,  40 => 9,  34 => 7,  31 => 6,  25 => 4,  23 => 3,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<div class=\"row\">
    <p class=\"info\">
        {% if config.get('plugins.tntsearch.display_hits') %}
            <span class=\"hits\">Found {{ tntsearch_results.number_of_hits }} results</span>
        {% endif %}
        {% if config.get('plugins.tntsearch.display_time') %}
            <span class=\"time\">in  <span>  {{ tntsearch_results.execution_time }}</span></span>
        {% endif %}
    </p>
    {% for key, val in tntsearch_results.hits  %}
        <h5 class=\"title\">
            <a href=\"{{ base_url ~ val.link }}\">{{ val.title }}</a>
        </h5>
        {% if config.get('plugins.tntsearch.display_route') %}
            <h6 class=\"route\">{{ val.link }}</h6>
        {% endif %}
        <p>{{ val.content }}</p>
    {% endfor %}
</div>", "tntquery-ajax.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/plugins/tntsearch/templates/tntquery-ajax.html.twig");
    }
}
