using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// JaneScriptのAPIにつけておく属性。
	/// </summary>
	[AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = false)]
	public class JaneScriptApiAttribute : Attribute {
	}
	
	/// <summary>
	/// JaneScript のAPIであるが、
	/// ラッパーから使うことが推奨されない型やメンバーにつけておく属性。
	/// </summary>
	[AttributeUsage(AttributeTargets.All, AllowMultiple=false, Inherited=false)]
	public class WrapperNotRecommendedJaneScriptApiAttribute : JaneScriptApiAttribute {
	}
}
