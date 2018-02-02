<?php

/* forms/fields/indexstatus/indexstatus.html.twig */
class __TwigTemplate_586fcf3ac11c16f22a07286d44aaa1a6a1026cbc5398e6dba8869b64108a51ed extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("forms/field.html.twig", "forms/fields/indexstatus/indexstatus.html.twig", 1);
        $this->blocks = array(
            'input' => array($this, 'block_input'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "forms/field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_input($context, array $blocks = array())
    {
        // line 4
        echo "    <div class=\"form-list-wrapper ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "size", array()), "html", null, true);
        echo "\">
        <div class=\"index-status\">
            ";
        // line 6
        if ($this->getAttribute((isset($context["tntsearch_index_status"]) ? $context["tntsearch_index_status"] : null), "status", array())) {
            // line 7
            echo "                <button id=\"tntsearch-index\" class=\"button reindex tntsearch-reindex\">Re-Index Content</button>
                <span class=\"tntsearch-status success\"><i class=\"fa fa-book\"></i> ";
            // line 8
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["tntsearch_index_status"]) ? $context["tntsearch_index_status"] : null), "msg", array()), "html", null, true);
            echo "</span>
            ";
        } else {
            // line 10
            echo "                <button id=\"tntsearch-index\" class=\"button critical tntsearch-reindex\">Index Content</button>
                <span class=\"tntsearch-status error\"><i class=\"fa fa-warning\"></i> ";
            // line 11
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["tntsearch_index_status"]) ? $context["tntsearch_index_status"] : null), "msg", array()), "html", null, true);
            echo "</span>
            ";
        }
        // line 13
        echo "            <div class=\"warning tntsearch-error-details\"></div>
        </div>
    </div>
";
    }

    public function getTemplateName()
    {
        return "forms/fields/indexstatus/indexstatus.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 13,  50 => 11,  47 => 10,  42 => 8,  39 => 7,  37 => 6,  31 => 4,  28 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends \"forms/field.html.twig\" %}

{% block input %}
    <div class=\"form-list-wrapper {{ field.size }}\">
        <div class=\"index-status\">
            {% if tntsearch_index_status.status %}
                <button id=\"tntsearch-index\" class=\"button reindex tntsearch-reindex\">Re-Index Content</button>
                <span class=\"tntsearch-status success\"><i class=\"fa fa-book\"></i> {{ tntsearch_index_status.msg }}</span>
            {% else %}
                <button id=\"tntsearch-index\" class=\"button critical tntsearch-reindex\">Index Content</button>
                <span class=\"tntsearch-status error\"><i class=\"fa fa-warning\"></i> {{ tntsearch_index_status.msg }}</span>
            {% endif %}
            <div class=\"warning tntsearch-error-details\"></div>
        </div>
    </div>
{% endblock %}", "forms/fields/indexstatus/indexstatus.html.twig", "/Users/pj_moriarty/Desktop/grav-admin/user/plugins/tntsearch/templates/forms/fields/indexstatus/indexstatus.html.twig");
    }
}
