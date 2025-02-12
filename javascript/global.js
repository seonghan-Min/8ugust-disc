this.global = {};
this.global.qDone = 0;
this.global.result = [null, null];

this.global.questions = [
	[['열정적인', 'I', 'I'], ['대담한', 'D', 'D'], ['치밀한', 'C', 'C'], ['만족해하는', 'S', 'S']],
	[['신중한', 'C', 'C'], ['결단력 있는', 'D', 'D'], ['확신을 주는', 'I', 'I'], ['호의적인', 'S', 'N']],
	[['다정한', 'I', 'N'], ['정확한', 'C', 'C'], ['솔직하게 말하는', 'D', 'D'], ['변화가 적은', 'N', 'S']],
	[['말하기 좋아하는', 'I', 'I'], ['자제력있는', 'C', 'C'], ['관습을 따르는', 'S', 'S'], ['결단력 있는', 'D', 'D']],
	[['도전하는', 'D', 'D'], ['통찰력있는', 'C', 'C'], ['사교적인', 'I', 'I'], ['온건한', 'S', 'S']],
	[['온화한', 'S', 'S'], ['설득력있는', 'I', 'N'], ['겸손한', 'N', 'C'], ['독창적 아이디어 내는', 'N', 'D']],
	[['표현력있는', 'I', 'I'], ['조심성있는', 'C', 'C'], ['주도적인', 'D', 'D'], ['민감히 반응하는', 'N', 'S']],
	[['호의적인', 'I', 'I'], ['세심한', 'C', 'N'], ['겸손한', 'S', 'S'], ['참을성이 적은', 'D', 'D']],
	[['사려깊은', 'C', 'C'], ['남 의견에 잘 동의하는', 'S', 'S'], ['매력적인', 'I', 'I'], ['확고한', 'D', 'D']],
	[['용감한', 'D', 'D'], ['격려하는', 'I', 'I'], ['순응하는', 'S', 'S'], ['수줍어하는', 'N', 'C']],
	[['내성적인', 'C', 'C'], ['호의적인', 'S', 'S'], ['의지가 강한', 'D', 'D'], ['명량한', 'I', 'I']],
	[['남을 격려하는', 'I', 'I'], ['친절한', 'S', 'S'], ['주의깊은', 'C', 'C'], ['독립심 강한', 'D', 'D']],
	[['경쟁심있는', 'D', 'D'], ['생각이 깊은', 'S', 'S'], ['활발한', 'I', 'I'], ['자신을 잘 드러내지 않는', 'C', 'C']],
	[['세밀한', 'C', 'C'], ['유순한', 'S', 'S'], ['완고한', 'D', 'D'], ['놀기 좋아하는', 'I', 'I']],
	[['사람에게 호감을 주는', 'I', 'I'], ['생각이 깊은', 'C', 'N'], ['의지가 굳은', 'D', 'D'], ['일관되게 행동하는', 'S', 'S']],
	[['논리적인', 'C', 'C'], ['과감한', 'D', 'D'], ['충실한', 'S', 'S'], ['인기있는', 'I', 'I']],
	[['사교적인', 'I', 'I'], ['참을성있는', 'S', 'S'], ['자신감있는', 'D', 'D'], ['말씨가 부드러운', 'C', 'C']],
	[['의존적인', 'S', 'S'], ['의욕적인', 'D', 'N'], ['철저한', 'C', 'C'], ['활기있는', 'I', 'I']],
	[['의욕적인', 'D', 'D'], ['외향적인', 'I', 'I'], ['친근한', 'S', 'S'], ['갈등을 피하는', 'N', 'C']],
	[['유머가 있는', 'I', 'I'], ['이해심있는', 'S', 'S'], ['공평한', 'N', 'C'], ['단호한', 'D', 'D']],
	[['자제력있는', 'C', 'C'], ['관대한', 'S', 'S'], ['활기있는', 'I', 'I'], ['고집스런', 'D', 'D']],
	[['재치있는', 'I', 'I'], ['내향적인', 'C', 'C'], ['강인한', 'D', 'D'], ['쉽게 화내지않는', 'S', 'S']],
	[['남과 잘 어울리는', 'I', 'I'], ['점잖은', 'C', 'C'], ['활기찬', 'D', 'D'], ['너그러운', 'S', 'S']],
	[['매력있는', 'I', 'I'], ['흡족해하는', 'S', 'S'], ['지시하는', 'D', 'D'], ['양보하는', 'C', 'C']],
	[['자기주장을 하는', 'D', 'D'], ['체계적인', 'C', 'C'], ['협력적인', 'S', 'S'], ['즐거운', 'I', 'I']],
	[['유쾌한', 'I', 'I'], ['정교한', 'C', 'C'], ['결과를 요구하는', 'D', 'D'], ['침착한', 'S', 'S']],
	[['변화를 추구하는', 'D', 'D'], ['우호적인', 'S', 'S'], ['호소력있는', 'I', 'I'], ['꼼꼼한', 'C', 'C']],
	[['공손한', 'C', 'C'], ['새롭게 시작하는', 'D', 'D'], ['낙천적인', 'I', 'I'], ['도움을 주려하는', 'S', 'S']]
];

this.global.grades = [
	[[-27, -23], [-26, -19], [-27, -19], [-26, -21]],	// 01
	[[-22, -17], [-18, -9], [-18, -8], [-20, -12]],		// 02
	[[-16, -15], [-8, -7], [-7, -6], [-11, -10]],		// 03
	[null, [-6, -6], [-5, -5], [-9, -9]],				// 04
	[null, null, [-4, -4], [-8, -8]],					// 05
	[[-14, -14], [-5, -5], [-3, -3], null],				// 06
	[[-13, -13], [-4, -4], [-2, -2], [-7, -7]],			// 07
	[[-12, -12], [-3, -3], [-1, -1], [-6, -6]],			// 08
	[[-11, -11], null, [0, 0], null],					// 09
	[null, [-2, -2], null, [-5, -5]],					// 10
	[[-10, -9], null, [1, 1], [-4, -4]],				// 11
	[[-8, -8], [-1, 0], [2, 2], [-3, -3]],				// 12
	[null, null, null, null],							// 13
	[[-7, -7], [1, 1], [3, 3], [-2, -2]],				// 14
	[[-6, -6], [2, 2], [4, 5], null],					// 15
	[[-5, -5], null, null, [-1, -1]],					// 16
	[null, [3, 3], [6, 6], null],						// 17
	[[-4, -4], null, null, [0, 0]],						// 18
	[[-3, -2], [4, 4], [7, 7], [1, 1]],					// 19
	[[-1, -1], [5, 5], [8, 8], [2, 2]],					// 20
	[[0, 0], null, [9, 9], [3, 3]],						// 21
	[[1, 1], [6, 6], null, null],						// 22
	[[2, 3], null, [10, 10], [4, 4]],					// 23
	[[4, 5], [7, 7], [11, 11], [5, 15]],				// 24
	[[6, 8], [8, 8], [12, 12], [16, 16]],				// 25
	[[9, 17], [9, 9], [13, 13], [17, 17]],				// 26
	[[18, 26], [10, 28], [14, 25], [18, 23]],			// 27
	[[27, 27], [28, 28], [26, 26], [24, 24]]			// 28
];

this.global.type = {
	'D' : ["#FF6565", "주도성(Dominance)",  "목표를 달성하기 위해 앞장서는 자. 문제 해결을 위해 의사결정을 신속하고 단호하게 수행하는 자. 효율성과 성과를 중시하며 도전을 즐기는 자."],
	'I' : ["#ECC774", "사교성(Influence)",  "사람들과의 연결을 통해 에너지를 얻는 자. 긍정적이고 활기찬 분위기를 형성해 주변을 밝히는 자. 창의적인 아이디어를 제공하여 타인에게 영감을 주는 자."],
	'S' : ["#93ADDD", "안정성(Steadiness)", "신뢰를 바탕으로 안정감을 주는 자. 조화로운 관계를 유지하여 타인을 지지하고 협력하는 자. 꾸준히 자신의 역할을 다하며 변화를 천천히 받아들이는 자."],
	'C' : ["#8DE389", "신중성(Complience)", "규칙을 중시하며 정확성을 추구하는 자. 논리적이고 분석적인 사고로 문제를 체계적으로 해결하는 자. 책임감 있게 자신의 과제를 완수하며 완벽을 지향하는 자."]
}

this.global.category = {
	'DI'	:[
		'열정적인 선구자', 'D'
		, "열정적인 선구자(DI)는 주도적인 행동 스타일과 사교적인 대인관계 패턴이 결합한 유형으로 16가지 유형 중 가장 뛰어난 리더십을 발휘하는 유형입니다. 빠른 판단력과 실행력을 가지고 있으며, 이를 바탕으로 문제 상황에 직면했을 때 낙관적인 태도로 솔루션을 찾아 나가는 경향을 보입니다. 결과를 달성하기 위해 적극적으로 행동하고, 새로운 아이디어와 기회를 탐색하며, 이를 현실로 만들기 위해 과감하게 나아가는 모습을 보입니다."
		, "열정적인 선구자는 경쟁적인 환경을 선호합니다. 도전하는 것 자체에 대해 큰 흥미를 느끼며 과제를 해결하고 나아가는데에 희열을 느낍니다. 본인의 의도를 관철하기 위해 팀원들을 설득해 협력하도록 유도하는데 능합니다. 에너지가 넘치는 성격으로 팀원들과의 상호작용에서 긍정적인 영향을 미치며, 이러한 모습 덕분에 팀원들은 열정적인 선구자에게 동기부여를 받곤 합니다."
		, "진정한 리더십은 다른 사람들이 당신의 목표를 자신의 목표로 받아들이게 만들고, 그것을 이루기 위해 스스로 움직이도록 영감을 주는 것이다."
		, "- 드와이트 D. 아이젠하워"
		, "그러나 이러한 행동경향이 짙어지게 될 경우 오히려 역효과를 발휘할 수 있기 때문에 주의해야합니다. 특히나 열정적인 선구자 유형은 주로 사회에서 팀장, 매니저, 프로젝트 리더 등의 직급을 맡고 있을 확률이 높기 때문에 이러한 단점이 치명적으로 작용할 수 있습니다. 가령 큰 그림과 목표에 집중하느라 세부적인 계획이나 사항을 소홀히 한다거나, 그 과정에서 현재에 처한 상황을 충분히 검토하지 않은 채 즉흥적으로 행동하여 피해를 발생시킨다거나 하는 것들을 말입니다."
		, "그 중에서도 열정적인 선구자 유형은 경쟁심과 권위적인 태도를 주의해야 합니다. 이들은 자신의 비전과 목표에 대한 확신이 강하기 때문에, 때로는 다른 사람들의 의견을 충분히 경청하지 않고 자신의 방식을 밀어붙이는 경우가 있습니다. 회의나 협력 과정에서 이러한 태도가 나타나면, 팀원들은 의견을 제시하는 것을 꺼리게 되고, 결과적으로 팀워크와 창의성이 약화될 수 있습니다. 특히, 권위적인 태도를 통해 의견을 강요할 경우, 팀원들이 소극적으로 변하거나 심리적으로 위축될 수 있어 전반적인 성과에도 부정적인 영향을 미칠 수 있습니다."
		, "열정적인 선구자 유형은 이러한 행동을 인식하고, 상대방의 의견을 진지하게 경청하며, 다양한 관점을 고려하려는 태도를 기른다면 더 나은 리더로 성장할 수 있습니다. “내가 옳다”는 생각을 잠시 내려놓고, 협력의 중요성을 우선시하는 것이 필요합니다. 이는 단순히 업무 결과를 개선하는 것뿐 아니라, 사람들과의 신뢰 관계를 강화하는 데도 큰 도움이 됩니다."
		, "16가지 성격유형 중 열정적인 선구자(DI) 유형과 가장 유사한 유형은 ESTP와 ENTP 유형 입니다. 이들은 모두 도전적이고 활발하며, 변화와 성장을 두려워하지 않는 공통점을 가지고 있습니다. 열정적인 선구자 유형처럼 ESTP와 ENTP 유형 모두 새로운 아이디어와 기회를 탐색하는 데 능숙하고, 이를 실현하기 위해 사람들과 적극적으로 소통하며 설득력을 발휘합니다."
		, "이들은 모두 에너지가 넘치고 설득력이 강하며, 타인에게 영감을 주는 리더십을 보여줍니다. 동시에 장기적인 계획보단 현재의 가능성과 변화를 중시하며 유연하고 즉흥적인 면모를 보입니다. 그러나 세부적인 관리나 지나치게 반복적인 업무에서는 집중력이 떨어지는 경향을 보이며, 자신감이 지나쳐 타인과 갈등을 빚는 경향도 보인다는 공통점이 있습니다."
		, "ESTP", "ENTP"
	],
	'DS'	:[
		'신뢰받는 리더', 'D'
		, "신뢰받는 리더(DS)는 주도적인 행동 스타일과 안정적인 대인관계 패턴이 결합된 유형으로, 책임감과 신뢰감을 기반으로 조직을 이끄는 데 탁월한 능력을 보이는 유형입니다. 이들은 명확한 목표를 설정하고, 이를 실현하기 위해 구체적인 계획을 수립하며, 실행 과정에서 조직원들을 체계적으로 지원합니다. 문제 상황에서도 침착하게 대처하며, 실질적이고 현실적인 접근 방식을 통해 갈등을 해결하려는 경향이 강합니다."
		, "신뢰받는 리더는 체계적이고 조직적인 환경에서 가장 빛납니다. 팀 프로젝트에서 명확한 계획을 세우고 구성원들에게 역할을 배분하며, 필요할 경우 구성원들에게 조언과 도움을 제공해 협력적인 분위기를 조성합니다. 이들은 갈등 상황에서도 침착하게 문제를 분석하고, 모두가 수용 가능한 해결책을 제시하는 데 능숙합니다. 이러한 특성 덕분에 조직원들은 신뢰받는 리더를 중심으로 안정감을 느끼며 목표를 향해 나아갈 수 있습니다."
		, "리더십은 화려한 말이나 그럴듯한 약속으로 증명되지 않는다. 사람들이 따르는 리더는 직접 행동으로 보여주고 그 결과로 신뢰를 쌓아가는 사람이다."
		, "- 해럴드 진에넌"
		, "그러나 신뢰받는 리더 유형은 지나치게 체계적이고 현실적인 접근 방식이 단점으로 작용할 수 있습니다. 변동성이 큰 상황에서는 기존의 계획에만 의존하여 유연성이 부족한 모습을 보이거나, 새로운 아이디어를 수용하는 데 어려움을 겪을 수 있습니다. 또한, 모든 것을 스스로 책임지려는 태도로 인해 과로하거나 스트레스를 받을 가능성이 있습니다. 구성원들이 자율적으로 움직일 여지를 제한할 경우, 조직의 창의성과 자율성이 저하될 위험도 있습니다."
		, "특히 신뢰받는 리더는 과도한 책임감으로 인해 업무를 과중하게 떠안거나, 지나치게 현실적인 접근으로 인해 혁신적인 아이디어를 놓치는 경향이 있을 수 있습니다. 이들은 때때로 구성원들의 의견을 충분히 경청하지 않고 자신이 설정한 방향에만 집중하기도 합니다. 이러한 태도는 조직의 유연성과 개방성을 제한하며, 팀원들로 하여금 창의적 제안을 꺼리게 만들 수 있습니다."
		, "신뢰받는 리더 유형은 자신의 한계를 인식하고, 구성원들에게 더 많은 권한을 부여하며 그들의 의견을 적극적으로 반영하려는 노력을 기울일 필요가 있습니다. 이를 통해 조직원들은 더욱 자유롭게 자신들의 잠재력을 발휘할 수 있으며, 리더는 더 나은 결과를 이끌어낼 수 있습니다. 변화하는 환경에 대한 적응력을 높이고, 조직 내에서 열린 소통 문화를 조성하는 것이 장기적인 성공을 위한 핵심입니다."
		, "16가지 성격 유형 중 신뢰받는 리더(DS)와 가장 유사한 유형은 ESTJ와 ENTJ입니다. 이들은 모두 조직의 안정과 성과를 중요시하며, 현실적이고 체계적인 접근 방식을 선호합니다. 신뢰받는 리더처럼 ESTJ와 ENTJ 유형도 강한 책임감을 바탕으로 목표를 달성하기 위해 구성원들을 독려하고 지원하는 능력을 가지고 있습니다."
		, "이들은 모두 명확한 목표를 설정하고 이를 실행하는 데 강점이 있으며, 조직의 리더로서 구성원들에게 신뢰와 안정감을 제공합니다. 그러나 ESTJ와 ENTJ 모두 변화가 빠른 상황에서 지나치게 기존 방식을 고수하거나, 다른 사람들의 감정적인 측면을 간과하는 경향을 보일 수 있습니다. 이러한 점은 신뢰받는 리더 유형과 유사한 과제이며, 열린 태도와 유연한 사고를 통해 극복할 수 있는 부분입니다."
		, "ESTJ", "ENTJ"
	],
	'DC'	:[
		'논리적인 개척자', 'D'
		, "논리적인 개척자(DC)는 논리와 체계적인 접근 방식을 결합한 유형으로, 목표 달성을 위해 효율적이고 전략적인 사고를 발휘하는 유형입니다. 이들은 데이터를 기반으로 분석적인 결정을 내리며, 감정보다는 논리에 따라 문제를 해결하려는 경향이 있습니다. 독립적으로 일하는 것을 선호하며, 자신의 능력과 자원으로 문제를 해결하려는 강한 의지를 보입니다."
		, "논리적인 개척자는 철저한 분석과 계획을 통해 목표를 달성하는 데 집중합니다. 프로젝트를 시작하기 전에 데이터를 기반으로 모든 가능성을 검토하고, 세부적인 계획을 수립하여 효율적으로 일을 진행합니다. 이들은 문제를 해결할 때 감정적인 요소를 배제하고, 합리적인 해결책을 제시하는 데 탁월한 능력을 발휘합니다. 또한, 장기적인 관점을 가지고 전략을 세워 목표를 달성하기 위해 꾸준히 노력하는 모습을 보입니다."
		, "지식은 세상을 이해하고 변화시킬 수 있는 힘을 제공한다. 올바른 정보는 우리를 무지에서 해방시키며, 자유롭고 주체적인 삶을 살 수 있는 길을 열어준다."
		, "- 코피 아난"
		, "그러나 논리적인 개척자 유형은 지나치게 독립적이거나 논리적인 접근 방식에만 의존할 경우 단점이 드러날 수 있습니다. 팀워크가 중요한 환경에서는 다른 사람들과의 협업에서 어려움을 겪을 가능성이 있으며, 감정적인 요소를 간과해 관계가 소원해질 수 있습니다. 또한, 세부적인 계획에 너무 집착하다가 변화에 유연하게 대처하지 못하는 경우도 발생할 수 있습니다."
		, "특히 논리적인 개척자는 지나친 분석과 계획으로 인해 결정을 내리는 데 시간이 걸리거나, 다른 사람들의 의견을 충분히 수용하지 못할 수 있습니다. 이러한 태도는 구성원들 간의 의사소통 문제를 일으킬 수 있으며, 팀의 창의성과 유연성을 제한할 위험이 있습니다. 또한, 지나치게 독립적인 태도는 팀원들에게 소외감을 줄 수 있습니다."
		, "논리적인 개척자 유형은 자신의 행동을 인식하고, 팀워크와 열린 소통의 중요성을 이해하며 협력적인 태도를 기를 필요가 있습니다. 상대방의 의견을 적극적으로 경청하고, 유연성을 발휘하며 변화하는 상황에 적응하려는 노력이 필요합니다. 이를 통해 논리적인 개척자는 더욱 완벽한 전략가로 성장할 수 있습니다."
		, "16가지 성격 유형 중 논리적인 개척자(DC)와 가장 유사한 유형은 INTJ와 ISTJ입니다. 이들은 모두 논리적이고 체계적이며, 데이터를 중시하는 공통점을 가지고 있습니다. 논리적인 개척자처럼 INTJ와 ISTJ 유형도 독립적으로 목표를 설정하고 이를 달성하기 위해 전략을 세우는 데 능숙합니다."
		, "이들은 문제를 분석적으로 접근하며, 효율성을 중시하는 성향을 보입니다. 그러나 INTJ와 ISTJ 유형 모두 변화에 대해 상대적으로 느리게 적응하거나, 팀원들의 감정적인 요소를 간과하는 경향을 가질 수 있습니다. 이러한 점은 논리적인 개척자 유형과 유사한 과제이며, 이를 보완하기 위해 열린 사고와 타인과의 소통을 중시하는 것이 필요합니다."
		, "INTJ", "ISTJ"
	],
	'DIS'	:[
		'영향력있는 조정자', 'D'
		, "영향력 있는 조정자(DIS)는 적극적인 행동 스타일과 사교적인 성격, 그리고 안정적인 태도가 결합된 유형으로, 팀 내에서 사람들과의 협업을 중요시하며 조화를 이끌어내는 데 탁월한 능력을 보입니다. 이들은 상황을 조율해 모두가 만족할 수 있는 결과를 도출하고, 팀의 중심에서 긍정적인 분위기를 형성하며 목표 달성에 기여합니다."
		, "영향력 있는 조정자는 팀워크와 조화를 중시하며, 팀원들의 의견을 조율하고 동기를 부여하는 데 뛰어난 능력을 발휘합니다. 다양한 의견이 충돌하는 상황에서도 침착하게 조율을 통해 합의점을 찾으며, 각 구성원이 자신의 역할에 최선을 다할 수 있도록 지원합니다. 이들은 팀원들에게 긍정적인 에너지를 전달하며, 모두가 함께 성장할 수 있는 환경을 만들어냅니다."
		, "모든 위대한 성취는 협력에서 비롯된다. 서로의 지혜와 노력이 어우러질 때 비로소 새로운 가능성이 열리고, 함께 이루어낸 성과가 진정한 가치를 가진다."
		, "- 헬렌 켈러"
		, "그러나 영향력 있는 조정자 유형은 때로는 모든 사람을 만족시키려는 태도로 인해 지나치게 타협적인 모습을 보일 수 있습니다. 이들은 다른 사람들의 감정을 지나치게 고려하다가 자신의 의견이나 목표를 희생하는 경우가 발생할 수 있습니다. 또한, 갈등을 피하려는 경향이 강해 문제를 직면하기보다는 회피하려고 할 가능성도 있습니다."
		, "특히 영향력 있는 조정자는 지나친 배려와 타협으로 인해 중요한 결정을 미루거나, 팀의 효율성을 저하시키는 상황을 초래할 수 있습니다. 이들은 때로는 다른 사람들의 기대를 충족시키기 위해 과도한 책임을 떠안거나, 자신의 한계를 넘어서는 노력을 기울이는 경우가 있습니다. 이러한 태도는 결국 스트레스와 번아웃으로 이어질 위험이 있습니다."
		, "영향력 있는 조정자 유형은 자신의 경향을 인식하고, 모든 사람을 만족시키기보다는 상황에 따라 우선순위를 정하며 결단력 있게 행동하는 것이 필요합니다. 갈등을 피하기보다 이를 해결하는 데 중점을 두고, 자신의 의견을 명확하게 표현하며 팀의 방향성을 이끌어갈 수 있는 태도를 기른다면 더욱 효과적인 리더로 성장할 수 있습니다."
		, "16가지 성격 유형 중 영향력 있는 조정자(DIS)와 가장 유사한 유형은 ENFJ와 ESFJ입니다. 이들은 모두 사람 중심적인 태도를 가지며, 협력과 조화를 중요시합니다. 영향력 있는 조정자처럼 ENFJ와 ESFJ 유형도 타인을 배려하며, 팀의 긍정적인 분위기를 조성하는 데 능숙합니다."
		, "이들은 다른 사람들에게 동기를 부여하고, 팀 내에서 조화를 유지하기 위해 노력합니다. 그러나 ENFJ와 ESFJ 유형 모두 때로는 갈등을 피하려는 성향이나, 자신의 감정보다는 타인의 감정을 우선시하는 경향으로 인해 스트레스를 받을 수 있습니다. 이러한 점은 영향력 있는 조정자 유형과 유사한 과제이며, 이를 극복하기 위해 균형 잡힌 태도와 자기 관리가 필요합니다."
		, "ENFJ", "ESFJ"
	],
	'ID'	:[
		'창의적인 도전자', 'I'
		, "창의적 도전자(ID)는 활기차고 긍정적인 태도와 창의적 사고를 결합한 유형으로, 새로운 아이디어를 제안하고 변화를 이끄는 데 탁월한 능력을 발휘합니다. 이들은 도전적인 상황에서도 창의적인 해결책을 찾아내며, 빠른 결단력과 실행력을 바탕으로 아이디어를 실현합니다. 사람들과의 상호작용을 통해 에너지를 얻으며, 주변에 긍정적인 영향을 미치는 리더십을 보여줍니다."
		, "창의적 도전자는 변화를 두려워하지 않고 오히려 이를 기회로 삼아 혁신을 추구합니다. 새로운 프로젝트에서 기존 방식을 벗어난 창의적인 접근법을 제시하며, 이를 통해 팀에 활력을 불어넣습니다. 어려운 상황에서도 낙관적인 태도로 문제를 해결하고, 주변 사람들에게 영감을 주어 도전을 두려워하지 않도록 동기를 부여합니다. 이들의 에너지는 팀 전체의 사기를 높이는 중요한 역할을 합니다."
		, "변화는 누구에게나 다가오는 피할 수 없는 흐름이다. 그러나 진정한 성장은 단순히 변화에 적응하는 것이 아니라, 스스로 변화를 주도하며 새로운 길을 개척할 때 이루어진다."
		, "- 존 맥스웰"
		, "그러나 창의적 도전자 유형은 때로는 지나치게 많은 아이디어를 제시하거나 변화를 추구하는 과정에서 실질적인 세부사항을 소홀히 할 수 있습니다. 이들은 실행 가능성을 충분히 고려하지 않고 즉흥적으로 행동할 가능성이 있으며, 이러한 태도는 팀에 혼란을 초래하거나, 계획의 실행 단계에서 장애물을 유발할 수 있습니다."
		, "특히 창의적 도전자는 다른 사람들의 의견을 경청하기보다는 자신의 아이디어를 밀어붙이는 경향을 주의해야 합니다. 이로 인해 팀원들과의 협업에 어려움을 겪거나, 팀 내에서 갈등이 발생할 가능성이 있습니다. 또한, 지나치게 낙관적인 태도로 인해 현실적인 위험 요소를 간과하거나, 장기적인 관점을 놓치는 상황도 생길 수 있습니다."
		, "창의적 도전자는 자신의 경향을 인식하고, 아이디어의 실행 가능성을 분석하며 균형 잡힌 태도를 유지하는 것이 중요합니다. 새로운 아이디어를 제시하는 것뿐만 아니라, 이를 실현하기 위한 세부적인 계획을 세우고, 팀원들과의 협력을 통해 아이디어를 현실로 만들어가는 과정에 집중해야 합니다. 이를 통해 창의적 도전자는 혁신과 안정성을 겸비한 리더로 성장할 수 있습니다."
		, "16가지 성격 유형 중 창의적 도전자(ID)와 가장 유사한 유형은 ENTP와 ENFP입니다. 이들은 모두 창의적이고 활기찬 성격을 가지며, 변화를 추구하는 공통점을 가지고 있습니다. 창의적 도전자처럼 ENTP와 ENFP 유형도 새로운 아이디어를 제안하고, 사람들과의 상호작용을 통해 영감을 얻는 데 능숙합니다."
		, "이들은 문제 해결에서 창의성과 유연성을 발휘하며, 낙관적인 태도로 어려운 상황에 대처합니다. 그러나 ENTP와 ENFP 유형 모두 지나치게 많은 아이디어에 빠지거나 실행 단계를 소홀히 하는 경향이 있을 수 있습니다. 이러한 점은 창의적 도전자 유형과 유사한 과제이며, 이를 극복하기 위해 실용성과 협업을 중시하는 태도를 기르는 것이 필요합니다."
		, "ENTP", "ENFP"
	],
	'IS'	:[
		'따뜻한 조화가', 'I'
		, "따뜻한 조화가(IS)는 타인을 배려하고 조화로운 관계를 중요시하는 유형으로, 따뜻한 성격과 감정적 공감 능력을 바탕으로 주변 사람들에게 긍정적인 영향을 미칩니다. 이들은 사람들과 함께 있을 때 가장 편안함을 느끼며, 안정적인 환경 속에서 창의성을 발휘하며, 지원적인 역할을 선호합니다."
		, "따뜻한 조화가는 다른 사람들의 감정을 섬세하게 이해하고, 필요할 때 진심으로 공감하며 돕는 모습을 보입니다. 팀 내에서는 갈등을 완화하고 편안한 분위기를 조성하는 데 탁월하며, 이들의 따뜻하고 친근한 태도는 다른 사람들에게 신뢰와 안정감을 줍니다. 이러한 태도는 팀워크를 강화하고, 긍정적인 관계를 형성하는 데 중요한 역할을 합니다."
		, "진정한 행복은 나 혼자만의 기쁨이 아니라, 다른 사람들의 얼굴에 미소를 가져다줄 때 비로소 완성된다. 다른 이의 행복을 위해 베푸는 작은 선의가 결국 나에게 가장 깊고 지속적인 행복으로 돌아온다."
		, "- 데이비드 헨리 소로"
		, "그러나 따뜻한 조화가 유형은 때로는 자신의 감정을 억누르며 타인의 요구를 우선시하는 경향이 있어 주의가 필요합니다. 이들은 자신의 한계를 넘어서까지 다른 사람들을 돕거나, 갈등을 피하기 위해 자신의 의견을 억제하는 경우가 있을 수 있습니다. 이러한 행동은 결국 스트레스와 피로를 초래할 가능성이 있습니다."
		, "특히 따뜻한 조화가는 지나친 공감으로 인해 타인의 감정에 지나치게 영향을 받거나, 자신의 필요와 목표를 간과할 수 있습니다. 이들은 갈등 상황에서 지나치게 중립적인 태도를 취하여 중요한 문제를 해결하지 못하거나, 자신의 의사를 충분히 표현하지 못할 가능성이 있습니다. 이러한 점은 팀 내에서 오히려 오해를 초래할 수 있습니다."
		, "따뜻한 조화가는 자신의 감정을 돌보는 것이 타인을 돌보는 것만큼 중요하다는 점을 인식해야 합니다. 갈등을 피하기보다는 이를 건설적으로 해결하는 데 집중하고, 자신의 의견을 분명히 표현하는 연습을 통해 더 균형 잡힌 태도를 기를 수 있습니다. 이를 통해 따뜻한 조화가는 더욱 건강한 관계를 유지하며, 자신의 장점을 최대한 발휘할 수 있습니다."
		, "16가지 성격 유형 중 따뜻한 조화가(IS)와 가장 유사한 유형은 ISFP와 ESFP입니다. 이들은 모두 사람들과의 관계를 중시하며, 감정적으로 공감하는 능력을 가지고 있습니다. 따뜻한 조화가처럼 ISFP와 ESFP 유형도 조화로운 환경 속에서 창의성과 배려심을 발휘하는 데 능숙합니다."
		, "이들은 타인의 감정을 이해하고, 지원적인 역할을 수행하며, 다른 사람들에게 긍정적인 에너지를 전달합니다. 그러나 ISFP와 ESFP 유형 모두 때로는 자신의 필요를 간과하거나, 갈등을 회피하려는 성향이 있을 수 있습니다. 이는 따뜻한 조화가 유형과 유사한 과제로, 이를 극복하기 위해 자신의 감정을 존중하고 명확히 표현하는 태도를 기르는 것이 필요합니다."
		, "ISFP", "ESFP"
	],
	'IC'	:[
		'유연한 설득가', 'I'
		, "유연한 설득가(IC)는 창의적이고 독립적인 사고를 기반으로, 논리적 접근과 감성적 설득을 조화롭게 활용하는 유형입니다. 이들은 다양한 관점에서 문제를 이해하고 설득하며, 변화하는 상황에 유연하게 적응하는 능력을 가지고 있습니다. 창의적인 아이디어를 표현하는 데 능숙하며, 사교적이면서도 자신의 독립성을 중요시합니다."
		, "유연한 설득가는 회의나 토론에서 갈등을 조율하고 설득력 있는 해결책을 제시하는 모습을 자주 보입니다. 이들은 다양한 의견을 수용하고, 이를 바탕으로 창의적이고 현실적인 대안을 제시하여 팀 내 협력을 촉진합니다. 또한, 자신의 관점을 글이나 예술 작품을 통해 창의적으로 표현하며, 사람들에게 깊은 영감을 주는 역할을 합니다."
		, "창의성은 단순히 새로운 것을 발견하는 것이 아니라, 익숙한 것을 새롭게 보는 것이다."
		, "- 헨리 데이비드 소로"
		, "그러나 유연한 설득가 유형은 때로는 지나치게 많은 의견을 고려하거나, 결정을 내리는 데 시간이 오래 걸릴 수 있습니다. 이들은 자신의 아이디어에 너무 몰두하거나, 사람들을 설득하려다 보니 현실적인 제약을 간과하는 경우가 있을 수 있습니다. 또한, 자신의 독립성을 지키려는 성향 때문에 협업에서 갈등을 초래할 가능성도 있습니다."
		, "특히 유연한 설득가는 다른 사람들의 기대에 맞추기 위해 자신의 목표를 희생하거나, 지나치게 이상적인 해결책을 고집하는 경향을 주의해야 합니다. 이러한 태도는 실행 가능성을 떨어뜨리거나, 결과적으로 팀원들의 신뢰를 잃게 만드는 요인이 될 수 있습니다."
		, "유연한 설득가는 자신의 아이디어를 실현 가능성과 균형 잡힌 시각에서 검토하는 것이 중요합니다. 현실적인 제약을 고려하고, 다양한 의견을 조율하는 과정에서 협력의 가치를 인정하며 결단력을 발휘하는 태도를 기른다면, 더욱 설득력 있는 리더로 성장할 수 있습니다."
		, "16가지 성격 유형 중 유연한 설득가(IC)와 가장 유사한 유형은 INFP와 ENFP입니다. 이들은 모두 창의적이고 독립적인 사고를 하며, 사람들과의 상호작용에서 영감을 얻는 공통점을 가지고 있습니다. 유연한 설득가처럼 INFP와 ENFP 유형도 논리와 감성을 조화롭게 활용하며, 설득력 있는 해결책을 제시하는 데 능숙합니다."
		, "이들은 타인의 감정을 공감하면서도 자신의 독창성을 유지하며, 변화를 긍정적으로 받아들이고 적응합니다. 그러나 INFP와 ENFP 유형 모두 지나치게 이상적인 목표를 추구하거나, 현실적인 제약을 간과하는 경향이 있을 수 있습니다. 이를 극복하기 위해 실용적인 태도를 유지하고, 팀원들과의 협력을 더욱 강화하는 것이 필요합니다."
		, "INFP", "ENFP"
	],
	'DIC'	:[
		'혁신적인 설계자', 'I'
		, "혁신적인 설계자(DIC)는 창의적이면서도 분석적인 사고를 바탕으로, 새로운 아이디어를 현실로 구현하는 데 능숙한 유형입니다. 이들은 목표를 설정하고 이를 체계적으로 달성하려 하며, 사람들과 협력하는 동시에 독립적인 태도를 유지합니다. 변화와 혁신을 두려워하지 않고, 이를 주도적으로 추진하는 모습을 자주 보입니다."
		, "혁신적인 설계자는 복잡한 프로젝트를 효율적으로 설계하고, 팀을 이끌어 혁신적인 결과를 만들어냅니다. 전통적인 방식을 개선하거나 새로운 접근 방식을 도입해 더 나은 결과를 도출하려는 경향이 강합니다. 이들은 분석적 사고와 창의력을 겸비하여 팀원들에게 영감을 주고, 목표를 달성하기 위해 논리적이고 체계적으로 행동합니다."
		, "성공은 우연히 찾아오는 행운이 아니다. 철저한 준비와 그 준비를 발휘할 수 있는 기회가 만나는 순간, 비로소 성공은 우리의 것이 된다."
		, "- 보 로버츠"
		, "그러나 혁신적인 설계자 유형은 때로는 지나치게 독립적이거나 자신의 비전에 과도하게 집중하는 경향이 있습니다. 이로 인해 팀원들의 의견을 충분히 반영하지 못하거나, 지나치게 이상적인 목표를 설정해 실행 가능성을 놓치는 경우가 있을 수 있습니다. 또한, 혁신을 추진하려는 열정이 지나쳐 다른 사람들에게 부담을 줄 수 있습니다."
		, "특히 혁신적인 설계자는 자신의 방식이 최선이라고 확신하여 다른 접근 방식을 간과하거나, 지나친 자신감으로 인해 협력 과정에서 갈등을 일으킬 수 있습니다. 이로 인해 팀원들이 소외감을 느끼거나, 프로젝트 진행 속도가 느려질 수 있습니다. 이를 방지하기 위해서는 자신이 추진하는 방향에 대해 충분히 논의하고, 다양한 관점을 수용하는 태도가 필요합니다."
		, "혁신적인 설계자는 자신의 비전을 팀과 공유하고, 다양한 의견을 반영하며 실행 가능한 목표를 설정하는 연습을 통해 더 효과적인 리더로 성장할 수 있습니다. 변화와 혁신을 추구하되, 팀워크와 실현 가능성을 고려하는 균형 잡힌 태도가 이들에게 큰 도움이 될 것입니다."
		, "16가지 성격 유형 중 혁신적인 설계자(DIC)와 가장 유사한 유형은 ENTJ와 ENTP입니다. 이들은 모두 목표 지향적이고 창의적이며, 혁신적인 사고를 통해 문제를 해결하는 공통점을 가지고 있습니다. 혁신적인 설계자처럼 ENTJ와 ENTP 유형도 분석적이고 체계적인 방법으로 목표를 달성하는 데 능숙합니다."
		, "이들은 새로운 아이디어를 실현하려는 열정을 가지고 있으며, 팀과 협력하는 과정에서 뛰어난 리더십을 발휘합니다. 그러나 ENTJ와 ENTP 유형 모두 때로는 지나친 자신감으로 인해 협력 과정에서 갈등을 빚거나, 현실적인 제약을 간과할 가능성이 있습니다. 이를 극복하기 위해서는 열린 마음으로 팀원들의 의견을 수용하고, 현실적인 실행 방안을 마련하는 태도를 기르는 것이 필요합니다."
		, "ENTJ", "ENTP"
	],
	'SD'	:[
		'헌신적인 협력자', 'S'
		, "헌신적인 조력자(SD)는 책임감 있고 헌신적인 태도로 공동 목표를 달성하려는 유형입니다. 이들은 체계적인 환경에서 안정감을 느끼며, 실용적이고 현실적인 방식으로 문제를 해결하는 경향이 있습니다. 팀의 필요를 먼저 생각하고 기꺼이 도움을 제공하는 모습을 보이며, 신뢰할 수 있는 파트너로서 중요한 역할을 수행합니다."
		, "헌신적인 조력자는 팀이 어려움을 겪을 때 적극적으로 나서서 필요한 도움을 제공하며, 목표 달성을 위한 세부적인 작업 계획을 세웁니다. 그들은 팀워크를 강조하며, 실용적인 해결책을 제시하여 조직에 긍정적인 영향을 미칩니다. 이 유형은 책임감을 바탕으로 팀의 성공을 위해 헌신하는 모습을 보여줍니다."
		, "성공은 단순히 목표를 설정하는 것에 그치지 않는다. 그것은 내가 진정으로 원하는 것이 무엇인지를 깊이 이해하고, 그 목표를 향해 꾸준히 실천해 나가는 과정에서 이루어진다."
		, "- 찰스 스미스"
		, "하지만 헌신적인 조력자 유형은 때로 과도하게 자신의 책임감을 느껴, 자신이 맡은 일에 지나치게 몰두하게 될 수 있습니다. 이는 때때로 자신만의 목표를 희생하거나, 다른 팀원들의 의견을 무시하는 결과를 초래할 수 있습니다. 또한, 지나치게 세부적인 부분에 집중하다 보면 큰 그림을 놓치거나 변화를 받아들이기 어려운 경향이 있습니다."
		, "특히 이들은 변화를 두려워하고 기존 방식에 안주하려는 경향이 있습니다. 이는 팀이 새로운 아이디어나 접근 방식을 시도할 때 유연성을 떨어뜨릴 수 있습니다. 이를 해결하기 위해서는 변화를 긍정적으로 받아들이고, 팀의 의견을 적극적으로 반영하는 자세가 필요합니다. 또한, 자신의 역할을 넘어 팀의 전반적인 목표와 방향에 대해 더 넓은 시각을 갖는 것이 중요합니다."
		, "헌신적인 조력자는 자신이 맡은 책임을 다하면서도, 팀원들과 협력하여 더욱 큰 목표를 달성할 수 있습니다. 이를 위해서는 다른 팀원들의 의견을 경청하고, 변화에 대해 유연하게 접근하는 태도를 기르는 것이 중요합니다. 또한, 세부적인 계획에 집중하면서도 전체적인 전략을 고려하는 균형 잡힌 사고가 필요합니다."
		, "16가지 성격 유형 중 헌신적인 조력자(SD)와 가장 유사한 유형은 ISFJ와 ISTJ입니다. ISFJ와 ISTJ 모두 책임감이 강하고, 체계적이고 신뢰를 기반으로 하는 방식으로 일을 처리하는 성향이 강합니다. 이들은 모두 실용적이고 현실적인 접근 방식을 선호하며, 공동의 목표를 달성하기 위해 헌신적으로 일합니다."
		, "이들은 주어진 일을 철저히 수행하며, 팀 내에서 중요한 역할을 맡는 경향이 있습니다. 그러나 ISFJ와 ISTJ는 때때로 변화를 두려워하거나 과도하게 세부적인 부분에 집중하는 경향이 있을 수 있습니다. 이들이 성공적으로 일을 추진하기 위해서는 변화에 대한 긍정적인 태도와 유연성을 기르고, 큰 그림을 놓치지 않도록 신경 써야 합니다."
		, "ISFJ", "ISTJ"
	],
	'SI'	:[
		'친화적인 동료', 'S'
		, "친화적인 동료(SI)는 타인과의 유대감을 형성하고, 조화로운 분위기를 만들어내는 데 뛰어난 유형입니다. 이들은 따뜻하고 친근한 태도로 주변 사람들에게 편안함을 주며, 안정적인 환경에서 가장 편안함을 느낍니다. 또한, 다른 사람들의 감정을 잘 이해하고 공감하며, 평화로운 관계를 유지하려는 경향이 강합니다."
		, "친화적인 동료는 팀 내 갈등이 생겼을 때 중재자가 되어 평화를 유지하고, 새로운 환경에서도 사람들과 빠르게 친밀해지는 모습을 보입니다. 이들은 협력적인 태도를 바탕으로 팀워크를 강화하며, 타인에게 긍정적인 영향을 미치는 역할을 합니다. 이들의 따뜻한 성격은 팀 내에서 신뢰를 쌓고, 조화를 이루는 데 중요한 기여를 합니다."
		, "평화는 우리가 서로에게 보여주는 친절과 이해에서 시작된다."
		, "- 달라이 라마"
		, "하지만 친화적인 동료 유형은 갈등을 지나치게 피하려는 경향이 있어, 중요한 문제를 직면하거나 해결하는 데 소극적일 수 있습니다. 또한, 다른 사람들의 감정에 지나치게 집중하다 보면 자신의 감정이나 필요를 소홀히 할 가능성이 있습니다. 이러한 태도는 때때로 본인의 스트레스를 가중시키거나, 팀의 중요한 결정에서 목소리를 내지 못하게 할 수 있습니다."
		, "특히 이들은 타인의 기대를 충족시키는 데 지나치게 집중할 경우, 자신의 한계를 넘어서 무리하게 행동하거나, 자신의 의견을 억누르는 상황에 직면할 수 있습니다. 이를 방지하기 위해서는 자신의 감정을 존중하고, 필요할 때는 갈등을 해결하기 위한 적극적인 자세를 취하는 것이 중요합니다. 또한, 자신의 의견을 명확히 표현하며, 팀 내에서 건설적인 대화를 이끌어갈 수 있는 능력을 기르는 것이 필요합니다."
		, "친화적인 동료는 자신의 강점을 살리면서도, 갈등 상황에서도 적극적으로 대처할 수 있는 능력을 키운다면 더욱 효과적인 팀원으로 성장할 수 있습니다. 이를 위해서는 자신의 감정을 이해하고, 필요할 때는 단호하게 입장을 표현하며, 문제 해결에 참여하는 태도를 기르는 것이 중요합니다."
		, "16가지 성격 유형 중 친화적인 동료(SI)와 가장 유사한 유형은 ISFP와 ESFP입니다. 이 두 유형은 모두 타인과의 관계에서 유대감을 형성하며, 따뜻하고 조화로운 환경을 선호합니다. 또한, 이들은 사람들과의 상호작용에서 에너지를 얻고, 감정적으로 공감하는 능력이 뛰어납니다."
		, "ISFP와 ESFP는 친화적인 동료와 마찬가지로 갈등을 피하고 평화로운 분위기를 유지하려는 성향이 있습니다. 그러나 이들은 때로는 자신의 감정을 억누르거나, 중요한 결정을 미루는 경향이 있을 수 있습니다. 이를 극복하기 위해서는 자신의 의견을 명확히 표현하고, 갈등 상황에서 건설적인 역할을 맡는 태도를 기르는 것이 필요합니다."
		, "ISFP", "ESFP"
	],
	'SC'	:[
		'세심한 보호자', 'S'
		, "세심한 보호자(SC)는 사람들의 필요를 세심히 파악하고, 안정적이고 체계적인 방식으로 지원하는 유형입니다. 이들은 세부적인 일을 꼼꼼히 처리하는 데 강점을 가지며, 논리적이면서도 감정적으로 타인을 배려하는 접근 방식을 선호합니다. 이러한 성향 덕분에 팀 내에서 헌신적이고 신뢰받는 존재로 인정받습니다."
		, "세심한 보호자는 동료의 실수를 조용히 수정해 주거나, 팀의 전반적인 흐름을 세심히 관리하며 균형을 유지하는 모습을 보입니다. 이들은 안정적이고 체계적인 환경에서 가장 잘 적응하며, 사람들이 필요로 하는 지원을 충실히 제공함으로써 팀의 성과를 높이는 데 기여합니다. 이러한 특성은 팀 내에서 신뢰와 존경을 얻게 하는 중요한 요소입니다."
		, "신뢰는 작은 일들을 꾸준히 잘 해내는 데서 비롯된다."
		, "- 존 우든"
		, "그러나 세심한 보호자 유형은 지나치게 세부적인 부분에 몰두하여 전체적인 상황을 놓칠 수 있다는 점에서 주의가 필요합니다. 또한, 타인의 감정을 지나치게 신경 쓰다 보면 자신을 희생하는 상황에 처할 수 있습니다. 이러한 성향은 스트레스를 증가시키고, 자신이 지닌 잠재력을 충분히 발휘하지 못하게 할 수 있습니다."
		, "특히, 이들은 갈등을 피하려는 경향이 있어 중요한 문제를 직면하거나 의견을 강하게 주장하는 데 어려움을 겪을 수 있습니다. 이를 해결하기 위해서는 갈등 상황에서도 자신의 의견을 명확히 전달하고, 필요한 경우에는 단호하게 행동하는 연습이 필요합니다. 자신의 감정을 소중히 여기면서도 팀 내에서 균형을 유지하려는 태도를 기르는 것이 중요합니다."
		, "세심한 보호자는 자신의 장점을 극대화하면서도 단점에서 비롯되는 제약을 극복하려는 노력을 통해 더 나은 팀원으로 성장할 수 있습니다. 이를 위해서는 자신이 맡은 역할에 대해 명확히 이해하고, 자신의 의견을 적극적으로 표현하며, 팀 내에서 균형을 유지할 수 있는 능력을 키워야 합니다."
		, "16가지 성격 유형 중 세심한 보호자(SC)와 가장 유사한 유형은 ISFJ와 INFJ입니다. 이 두 유형은 모두 사람들의 필요를 세심히 파악하며, 안정적이고 체계적인 환경을 선호합니다. 또한, 이들은 타인의 감정을 배려하면서도 논리적인 접근 방식을 선호하는 공통점이 있습니다."
		, "ISFJ와 INFJ는 세심한 보호자와 마찬가지로 헌신적이고 신뢰받는 존재로 인정받으며, 세부적인 일을 꼼꼼히 처리하는 데 강점을 보입니다. 그러나 이들은 때로는 타인의 기대에 지나치게 부응하려다 자신을 소홀히 하는 경향이 있습니다. 이를 극복하기 위해서는 자신만의 시간과 공간을 확보하고, 필요할 때는 자신의 감정을 솔직히 표현하며, 균형 있는 삶을 유지하려는 노력이 필요합니다."
		, "ISFJ", "INFJ"
	],
	'SIC'	:[
		'조화로운 지원자', 'S'
		, "조화로운 지원자(SIC)는 사람들 간의 균형을 유지하고 조화를 이루는 데 뛰어난 능력을 가진 유형입니다. 이들은 타인의 감정을 민감하게 인지하며, 주변 사람들에게 정서적인 안정감을 제공합니다. 신중하게 상황을 분석하여 최적의 해결책을 제시하며, 팀 내에서 중재자 역할을 맡아 조화로운 협력 환경을 조성하는 경향이 있습니다. 또한, 안정적인 환경 속에서 책임감 있게 행동하며, 조직의 원활한 운영을 위해 헌신하는 모습을 보입니다."
		, "조화로운 지원자는 협력과 조화를 최우선으로 생각합니다. 이들은 갈등을 최소화하고, 서로 간의 의견 차이를 중재하는 능력이 뛰어납니다. 다양한 관점을 조율하는 과정에서 감정을 배려하면서도 논리적인 접근 방식을 사용하여 균형 잡힌 결정을 내립니다. 이러한 특성 덕분에 팀 내에서 신뢰받는 존재로 자리 잡으며, 조직이 보다 원활하게 운영될 수 있도록 돕습니다. 또한, 팀원들이 편안함을 느낄 수 있도록 분위기를 조성하고, 적극적으로 지원하는 태도를 보입니다."
		, "진정한 리더십은 모든 사람의 목소리를 듣고, 이를 하나로 모아 나아갈 방향을 설정하는 것이다."
		, "- 넬슨 만델라"
		, "그러나 조화로운 지원자 유형은 지나치게 조화를 중시한 나머지, 본인의 의견을 강하게 주장하지 못하는 경우가 있습니다. 갈등을 피하려는 경향이 강해, 때로는 자신의 감정이나 의견을 억누르고 타인의 의견을 우선시하는 모습을 보일 수도 있습니다. 이러한 성향이 지속되면 본인의 역할과 책임에 대한 부담이 커지며, 스트레스를 받을 가능성이 높아집니다. 특히, 팀 내에서 갈등을 해결하는 과정에서 모든 사람을 만족시키려다 보면, 오히려 결정이 지연되거나 비효율적인 해결책이 나올 수도 있습니다."
		, "이들은 또한 너무 많은 책임을 떠안는 경향이 있습니다. 팀원들의 의견을 존중하는 것은 중요하지만, 모든 사람의 요구를 충족시키려 하다 보면 본인의 한계를 넘어서게 될 수도 있습니다. 특히 중요한 결정을 내려야 하는 상황에서 망설이거나 주저하는 경우가 있으며, 이로 인해 본인의 의견이 묻히거나 중요한 기회를 놓칠 수도 있습니다. 또한, 감정을 배려하는 과정에서 타인의 부담까지 짊어지려는 경향이 있어, 감정적 소진을 경험할 가능성이 높습니다."
		, "조화로운 지원자는 이러한 단점을 극복하기 위해 자신만의 명확한 기준을 설정하는 것이 중요합니다. 모든 사람을 만족시키는 것이 불가능하다는 점을 인식하고, 보다 현실적인 선택을 하는 것이 필요합니다. 또한, 자신의 의견을 더욱 적극적으로 표현하고, 타인의 감정을 배려하면서도 본인의 입장을 분명히 밝히는 연습이 중요합니다. 감정적 균형을 유지하면서도 논리적으로 설득하는 능력을 기른다면, 더욱 효과적인 중재자가 될 수 있을 것입니다."
		, "16가지 성격 유형 중 조화로운 지원자(SIC) 유형과 가장 유사한 유형은 INFJ와 ISFJ입니다. 두 유형 모두 사람들과의 관계에서 깊은 공감을 보이며, 조직의 조화를 유지하는 데 능숙한 성향을 가지고 있습니다. INFJ는 조화로운 지원자처럼 사람들의 감정을 이해하는 능력이 뛰어나며, 갈등 해결과 중재 역할을 맡는 경우가 많습니다. 또한, 장기적인 비전을 설정하고 이를 실현하기 위해 신중하게 계획을 세우는 특성이 있습니다."
		, "ISFJ 또한 조화로운 지원자 유형과 유사한 면을 많이 보입니다. 이들은 세심하고 책임감이 강하며, 조직 내에서 헌신적인 역할을 수행하는 경우가 많습니다. 조화로운 지원자처럼 팀원들의 감정을 배려하면서도 실질적인 도움을 제공하는 성향이 강하며, 안정적인 환경 속에서 최상의 역량을 발휘합니다. 다만, INFJ와 마찬가지로 갈등을 피하려는 경향이 있으며, 지나치게 타인을 배려하다 보면 자신의 감정을 희생하는 경우가 생길 수 있습니다. 이를 보완하기 위해 본인의 의견을 더욱 명확하게 표현하는 연습이 필요합니다."
		, "INFJ", "ISFJ"
	],
	'CD'	:[
		'치밀한 설계자', 'C'
		, "치밀한 설계자(CD)는 철저한 논리와 분석력을 바탕으로 문제를 해결하는 유형입니다. 이들은 높은 수준의 완벽성을 추구하며, 목표를 달성하기 위해 세부적인 계획을 수립하는 데 능숙합니다. 모든 과정을 철저히 검토하고 최적의 방법을 모색하며, 효율성을 극대화하는 데 집중합니다. 또한 독립적으로 업무를 수행하는 것을 선호하며, 책임감을 가지고 자신의 역할을 완수하려는 강한 의지를 보입니다."
		, "치밀한 설계자는 체계적이고 조직적인 사고방식을 갖추고 있어 프로젝트나 업무를 수행할 때 철저한 계획과 분석을 기반으로 접근합니다. 문제 해결 과정에서 논리적인 근거를 중요하게 여기며, 감정이나 직관보다는 데이터와 객관적인 사실을 중시하는 경향이 있습니다. 이들은 기존의 방식에 안주하지 않고, 지속적으로 더 나은 방법을 모색하며 개선해 나가는 태도를 보입니다. 이러한 성향 덕분에 기업이나 조직 내에서 중요한 전략적 역할을 맡는 경우가 많습니다."
		, "모든 위대한 업적은 우연히 이루어지는 것이 아니다. 철저한 계획을 세우고 그것을 끊임없이 실행해 나갈 때, 비로소 위대한 성과가 탄생한다."
		, "- 알렉산더 그레이엄 벨"
		, "그러나 치밀한 설계자 유형은 지나치게 완벽을 추구하는 경향이 있어 때때로 실행 속도가 느려질 수 있습니다. 모든 요소를 완벽하게 정리한 후에야 행동하려는 성향 때문에 변화가 빠른 환경에서는 적응력이 다소 떨어질 수도 있습니다. 또한, 높은 기준을 설정하기 때문에 본인뿐만 아니라 주변 사람들에게도 엄격한 태도를 보이며, 협업 과정에서 갈등이 발생할 가능성이 있습니다."
		, "이들은 또한 독립적으로 일하는 것을 선호하는 경향이 강해, 팀워크보다는 개인의 역량을 우선시하는 모습을 보이기도 합니다. 자신의 논리와 분석이 최선이라고 생각하여 타인의 의견을 경청하는 데 어려움을 겪을 수 있으며, 감정적인 요소를 간과하는 경우도 많습니다. 이러한 태도는 업무의 질을 높이는 데 기여할 수 있지만, 대인관계에서 거리감을 형성할 수도 있습니다."
		, "치밀한 설계자는 이러한 단점을 극복하기 위해 완벽함보다는 실용성을 우선시하는 태도를 기를 필요가 있습니다. 또한, 팀원들의 다양한 의견을 수용하고 협력을 통해 더 나은 결과를 도출하는 것이 중요합니다. 모든 것을 혼자 해결하려 하기보다는 타인의 강점을 인정하고 이를 활용하는 능력을 기른다면 더욱 효과적인 리더로 성장할 수 있습니다."
		, "16가지 성격 유형 중 치밀한 설계자(CD) 유형과 가장 유사한 유형은 INTJ와 ISTJ입니다. 두 유형 모두 논리적이고 체계적인 사고방식을 바탕으로 문제를 해결하며, 효율성을 중시합니다. INTJ는 혁신적인 전략을 구상하는 데 뛰어난 반면, ISTJ는 기존의 규칙과 구조를 철저히 따르며 안정적인 환경을 조성하는 데 능숙합니다. 이러한 특성은 치밀한 설계자의 강점과 잘 맞아떨어집니다."
		, "INTJ와 ISTJ 유형은 모두 조직적이고 분석적인 접근 방식을 선호하며, 신뢰할 수 있는 계획을 세우는 데 능숙합니다. 하지만 INTJ는 더 나은 방법을 찾기 위해 기존의 방식을 과감히 버리는 반면, ISTJ는 검증된 절차를 따르는 것을 선호하는 경향이 있습니다. 치밀한 설계자가 이러한 두 유형의 장점을 조화롭게 활용한다면, 전략적 사고와 실용성을 겸비한 강력한 문제 해결자가 될 수 있을 것입니다."
		, "INTJ", "ISTJ"
	],
	'CI'	:[
		'결단력있는 분석가', 'C'
		, "결단력있는 분석가(CI)는 논리적 사고와 창의적 사고를 조화롭게 결합하는 유형입니다. 이들은 복잡한 문제를 체계적으로 분석하고, 명확한 데이터를 바탕으로 최적의 해결책을 도출하는 능력이 뛰어납니다. 동시에, 기존의 틀에 얽매이지 않고 혁신적인 아이디어를 탐색하며, 새로운 접근 방식을 시도하는 데 주저하지 않습니다. 사람들과의 토론과 협업을 통해 독창적인 영감을 얻으며, 이를 통해 더 나은 해결책을 개발하는 경향이 있습니다."
		, "결단력있는 분석가는 논리적 사고를 기반으로 창의성을 발휘하는 유형입니다. 이들은 새로운 개념과 혁신적인 방법론을 탐구하는 것을 즐기며, 끊임없이 더 나은 방식을 고민합니다. 또한, 명확한 근거와 체계적인 분석을 중시하여 신뢰할 수 있는 해결책을 제안하는 데 강점을 보입니다. 사람들과의 논의를 통해 다양한 시각을 접하며, 이를 종합하여 독창적인 결과물을 만들어냅니다. 이러한 특성 덕분에 문제 해결과 혁신적인 사고가 요구되는 분야에서 두각을 나타낼 가능성이 높습니다."
		, "모든 깨달음과 발전은 한 가지 의문에서 시작된다. 끊임없이 질문하는 사람만이 새로운 가능성을 발견하고, 성장할 수 있는 길을 열어갈 수 있다."
		, "- 소크라테스"
		, "그러나 결단력있는 분석가 유형은 지나치게 이론적인 접근을 선호하는 경향이 있어, 실질적인 행동으로 이어지는 데 어려움을 겪을 수 있습니다. 완벽한 해결책을 찾기 위해 지나치게 고민하다가 결정을 미루거나, 실행보다는 분석에만 집중하는 경우가 많습니다. 이로 인해 실제로 문제를 해결하는 것이 아니라, 개념적인 논의에서 벗어나지 못하는 상황이 발생할 수 있습니다. 또한, 지나치게 논리적인 사고방식이 때로는 감정적인 요소를 간과하게 만들 수도 있습니다."
		, "또한, 이들은 자신의 아이디어에 대한 확신이 강한 반면, 타인의 감정이나 의견을 충분히 고려하지 않는 경우가 있습니다. 특히 논쟁을 즐기는 성향이 있어, 자신의 논리가 타당하다고 생각되면 강하게 주장하는 경향이 있습니다. 이는 토론에서는 유리할 수 있지만, 협업 환경에서는 갈등을 초래할 가능성이 있습니다. 지나치게 이성적인 태도로 인해 감정적인 공감을 놓치는 경우가 있으며, 이로 인해 주변 사람들과의 관계에서 오해를 불러일으킬 수도 있습니다."
		, "결단력있는 분석가는 이러한 단점을 극복하기 위해 실행력과 감성적인 공감을 의식적으로 키우는 것이 중요합니다. 분석과 논리를 뛰어나게 활용하는 것은 장점이지만, 이를 실질적인 행동으로 연결하는 연습이 필요합니다. 또한, 논리적인 사고뿐만 아니라 상대방의 감정을 고려하는 태도를 기르면, 더욱 효과적인 협업을 이끌어낼 수 있습니다. 즉, 논리와 감성을 균형 있게 조화시킨다면, 보다 설득력 있고 영향력 있는 인물로 성장할 수 있습니다."
		, "16가지 성격 유형 중 결단력있는 분석가(CI) 유형과 가장 유사한 유형은 INTP와 ENTP입니다. 두 유형 모두 논리적이면서도 창의적인 성향을 보이며, 새로운 아이디어를 탐구하는 것을 즐깁니다. INTP는 깊이 있는 분석과 비판적 사고에 강점을 가지며, 철저한 논리적 검토를 통해 문제를 해결하는 경향이 있습니다. 또한, 독립적인 사고를 중요시하며, 기존의 개념을 혁신적으로 재구성하는 능력이 뛰어납니다."
		, "ENTP 역시 결단력있는 분석가와 많은 공통점을 가지고 있습니다. 이들은 논쟁을 통해 사고를 확장하는 것을 즐기며, 끊임없이 새로운 아이디어를 생성합니다. 또한, 빠르게 생각을 정리하고 다각적인 관점에서 문제를 바라보는 능력이 뛰어나며, 사람들과의 대화를 통해 영감을 얻는 경우가 많습니다. 다만, INTP와 ENTP 모두 지나치게 이상적인 접근을 하거나, 실질적인 실행력에서 부족함을 보일 수 있어 이를 보완하는 노력이 필요합니다."
		, "INTP", "ENTP"
	],
	'CS'	:[
		'신중한 협력자', 'C'
		, "신중한 협력자(CS)는 체계적이고 안정적인 환경에서 최고의 역량을 발휘하는 유형입니다. 이들은 철저한 계획과 세부적인 관리를 통해 업무를 수행하며, 실수를 최소화하는 데 집중합니다. 타인의 의견을 존중하고 조화로운 협력을 중요시하며, 신뢰를 쌓는 데 많은 노력을 기울입니다. 또한, 규칙과 절차를 따르는 것을 선호하여 조직 내에서 안정적인 역할을 수행하며, 목표를 달성하기 위해 꾸준히 노력하는 모습을 보입니다."
		, "신중한 협력자는 꼼꼼함과 신뢰성을 바탕으로 팀 내에서 중요한 역할을 합니다. 이들은 작은 디테일까지 철저하게 검토하여 실수가 발생하지 않도록 예방하며, 일관된 품질을 유지하는 데 기여합니다. 또한, 감정적으로 차분하고 신중한 태도를 유지하며 동료들과 원만한 관계를 형성하는 경향이 있습니다. 이러한 특성 덕분에 조직 내에서 신뢰받는 조력자로 자리 잡을 가능성이 높습니다."
		, "성공은 단순한 재능이나 운에 의해 결정되지 않는다. 매일 성실하게 노력하고 꾸준히 나아가는 사람만이 결국 원하는 목표에 도달할 수 있다."
		, "- 콜린 파월"
		, "그러나 신중한 협력자 유형은 지나치게 세부적인 사항에 집착하여 큰 그림을 놓칠 위험이 있습니다. 모든 절차와 규칙을 철저하게 준수하려는 성향이 강하기 때문에, 예상치 못한 변화나 즉흥적인 상황에서 유연하게 대응하는 것이 어려울 수 있습니다. 또한, 실수를 피하려는 성향이 강하다 보니 새로운 시도를 주저하거나 지나치게 신중한 태도로 인해 결정이 늦어질 수도 있습니다."
		, "또한, 이들은 갈등을 피하려는 경향이 있어 자신의 의견을 강하게 주장하는 경우가 드뭅니다. 조화로운 관계를 유지하는 것이 중요하기 때문에, 때로는 자신의 생각이나 필요를 희생하며 타인의 의견을 따르려는 경향이 있습니다. 이러한 태도는 협력적인 환경에서는 긍정적으로 작용할 수 있지만, 중요한 의사결정에서 자신의 입장을 충분히 표현하지 않으면 불필요한 부담을 떠안을 수도 있습니다."
		, "신중한 협력자는 이러한 단점을 극복하기 위해 유연성을 기르고, 필요할 때는 과감한 결정을 내리는 연습이 필요합니다. 모든 것이 완벽하게 정리된 후에야 행동하는 것이 아니라, 때로는 빠른 결정을 통해 변화에 적응하는 능력을 기르는 것이 중요합니다. 또한, 자신의 의견을 명확히 표현하고, 갈등이 필요할 때는 이를 피하지 않고 건설적으로 해결하려는 태도를 가지는 것이 도움이 될 것입니다."
		, "16가지 성격 유형 중 신중한 협력자(CS) 유형과 가장 유사한 유형은 ISFJ와 ISTJ입니다. 두 유형 모두 신뢰성과 책임감을 중요하게 여기며, 조직 내에서 체계적으로 업무를 수행하는 성향을 보입니다. ISFJ는 타인의 감정을 세심하게 고려하며 협력을 중시하는 반면, ISTJ는 논리적이고 철저한 계획을 바탕으로 업무를 수행하는 경향이 있습니다. 두 유형 모두 신중한 협력자의 특징을 잘 반영하고 있으며, 조직 내에서 안정적인 역할을 수행하는 데 강점을 보입니다."
		, "ISFJ와 ISTJ 유형은 모두 체계적인 환경에서 뛰어난 능력을 발휘하며, 규칙과 절차를 중시하는 공통점을 가지고 있습니다. 그러나 ISFJ는 상대적으로 감정적인 요소를 더 고려하며 타인의 감정을 배려하는 반면, ISTJ는 논리적인 접근을 선호하며 효율성을 강조하는 경향이 있습니다. 신중한 협력자가 이러한 두 유형의 장점을 균형 있게 활용한다면, 조직 내에서 더욱 신뢰받고 영향력 있는 인물로 성장할 수 있을 것입니다."
		, "ISFJ", "ISTJ"
	],
	'DSC'	:[
		'실용적인 해결사', 'C'
		, "실용적 설계자(DSC)는 체계적이고 실용적인 접근 방식을 통해 목표를 달성하는 유형입니다. 이들은 논리적이고 꼼꼼한 계획을 세우는 것을 중요하게 여기며, 안정적인 환경에서 신뢰할 수 있는 결과를 만들어내는 데 집중합니다. 실질적인 성과를 중시하며, 효율적인 방법을 찾아 업무를 수행하는 능력이 뛰어납니다. 또한, 독립적으로 일할 수 있는 능력을 갖추면서도 필요할 때는 협력하여 최적의 결과를 도출하는 균형 잡힌 태도를 보입니다."
		, "실용적 설계자는 복잡한 프로젝트나 장기적인 목표를 달성하는 과정에서 체계적인 전략을 세우고 이를 철저히 실행하는 데 강점이 있습니다. 이들은 감정보다는 논리와 데이터에 근거하여 결정을 내리며, 신뢰할 수 있는 방식으로 업무를 처리하려 합니다. 또한, 높은 책임감을 바탕으로 주어진 역할을 성실하게 수행하며, 조직 내에서 중요한 기둥 역할을 맡는 경우가 많습니다. 이러한 특성 덕분에 이들은 기업의 운영, 프로젝트 관리, 정책 기획 등의 분야에서 두각을 나타냅니다."
		, "완벽한 실행은 철저한 계획에서 비롯된다. 방향 없이 움직이는 것은 노력의 낭비일 뿐이며, 성공을 원한다면 먼저 치밀한 계획을 세우는 것이 필수적이다."
		, "- 나폴레옹 보나파르트"
		, "그러나 실용적 설계자 유형은 지나치게 구조화된 방식을 고수하려는 경향이 있어 유연성이 부족할 수 있습니다. 모든 절차와 계획을 철저하게 수립한 후에야 실행하려는 성향 때문에 급변하는 환경에서 적응이 늦어질 가능성이 있습니다. 또한, 실수를 최소화하려는 태도가 강해 과도한 분석과 신중함으로 인해 결정을 내리는 속도가 느려질 수도 있습니다."
		, "이들은 업무의 효율성을 극대화하려다 보니 감정보다는 결과를 우선시하는 경향이 있으며, 이로 인해 대인관계에서 다소 차갑거나 무관심한 인상을 줄 수 있습니다. 또한, 자신의 방식이 가장 논리적이고 실용적이라고 생각하는 경향이 있어, 타인의 의견을 수용하는 데 어려움을 겪을 수도 있습니다. 이러한 태도가 협업 과정에서 갈등을 초래할 수 있기 때문에, 보다 개방적인 자세를 갖는 것이 필요합니다."
		, "실용적 설계자는 변화하는 환경에 대한 유연성을 기르고, 단기적인 실행력도 강화할 필요가 있습니다. 완벽한 계획을 세우는 것도 중요하지만, 때로는 빠르게 실행하고 실전에서 조정하는 과정이 더 효과적일 수 있습니다. 또한, 사람들과의 관계에서 단순한 업무 협력뿐만 아니라 신뢰를 구축하려는 노력이 필요하며, 감정적인 교류도 업무의 중요한 요소가 될 수 있음을 인식하는 것이 중요합니다."
		, "16가지 성격 유형 중 실용적 설계자(DSC) 유형과 가장 유사한 유형은 ISTJ와 INTJ입니다. 두 유형 모두 체계적이고 논리적인 사고를 바탕으로 계획을 수립하며, 실질적인 성과를 중시하는 공통점을 가지고 있습니다. ISTJ는 검증된 절차와 규칙을 따르는 데 능숙하며, INTJ는 전략적인 사고를 통해 혁신적인 해결책을 모색하는 데 뛰어난 역량을 보입니다."
		, "ISTJ와 INTJ 유형은 모두 장기적인 목표를 달성하기 위한 철저한 계획과 실행력을 갖추고 있습니다. 하지만 ISTJ는 기존의 체계를 유지하고 안정성을 중시하는 반면, INTJ는 새로운 방법을 찾아 기존의 방식을 개선하려는 성향이 강합니다. 실용적 설계자가 이 두 유형의 장점을 적절히 활용한다면, 조직 내에서 신뢰받는 전략적 리더로 성장할 수 있을 것입니다."
		, "ISTJ", "INTJ"
	],
}