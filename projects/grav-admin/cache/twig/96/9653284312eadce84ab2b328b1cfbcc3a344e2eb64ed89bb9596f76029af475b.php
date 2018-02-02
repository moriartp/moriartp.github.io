<?php

/* @Page:/Users/pj_moriarty/Desktop/grav-admin/user/plugins/error/pages */
class __TwigTemplate_57f2a533d7df7f8207374a0c920289ceef12705de1176dc22495d3672cd15b07 extends Twig_Template
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
        echo "<!-- ";
        echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->translate("PLUGIN_ERROR.ERROR_MESSAGE");
        echo " -->
<h3>Its not you...its me.</h3> 
<p>But it might also be you.</p> 
<h5><a href=\"/search\">Try searching for a page</a></h5>
<img src='/images/3/e/9/3/8/3e9386cfa45f7fd23bc6da31b6321597cf303360-robot-video.jpeg'>";
    }

    public function getTemplateName()
    {
        return "@Page:/Users/pj_moriarty/Desktop/grav-admin/user/plugins/error/pages";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!-- {{ 'PLUGIN_ERROR.ERROR_MESSAGE'|t }} -->
<h3>Its not you...its me.</h3> 
<p>But it might also be you.</p> 
<h5><a href=\"/search\">Try searching for a page</a></h5>
<img src='/images/3/e/9/3/8/3e9386cfa45f7fd23bc6da31b6321597cf303360-robot-video.jpeg'>", "@Page:/Users/pj_moriarty/Desktop/grav-admin/user/plugins/error/pages", "");
    }
}
