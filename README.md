# a.C.K.E. 영어 학습법 자동 시연 데모

## 프로젝트 개요
이 프로젝트는 특허받은 'a.C.K.E.' 영어 학습법의 4단계 과정을 자동으로 시연하는 웹 애플리케이션입니다.

## 🚀 Live Demo
https://kukpilho.github.io/cke-english-learning-demo/

## 파일 구조
```
CKE/
├── index.html              # 메인 HTML 파일
├── prompts.js              # 프롬프트 정의 파일
├── prompt-manager.js       # 프롬프트 관리 모듈
└── README.md              # 프로젝트 설명서
```

## 프롬프트 관리 시스템

### 1. 프롬프트 파일 분리
- **`prompts.js`**: 모든 프롬프트 정의가 포함된 모듈
- **`prompt-manager.js`**: 프롬프트 관리 및 버전 관리를 담당하는 클래스

### 2. 프롬프트 구조
각 단계별로 다음과 같은 프롬프트가 정의되어 있습니다:

- **step1**: Analyze (문장 성분 분석)
- **step2**: Copy (의미 블록 나누기)  
- **step3**: Korean (블록 단위 해석)
- **step4**: English (영작 복원)

### 3. 프롬프트 수정 방법

#### 방법 1: prompts.js 파일 직접 수정
```javascript
// prompts.js에서 해당 단계의 프롬프트를 직접 수정
export const prompts = {
    step1: `새로운 프롬프트 내용...`,
    // ...
};
```

#### 방법 2: 런타임에서 동적 수정 (개발용)
```javascript
// 브라우저 콘솔에서 실행
import promptManager from './prompt-manager.js';
promptManager.updatePrompt('step1', '새로운 프롬프트 내용...');
```

### 4. 프롬프트 버전 관리
- 현재 버전: 1.0.0
- 프롬프트 변경 시 버전 업데이트 권장
- `promptManager.getVersion()`으로 현재 버전 확인 가능

## 사용 방법

1. **API 키 설정**: OpenAI API 키를 입력합니다.
2. **영어 지문 입력**: 분석할 영어 문장을 입력합니다.
3. **결과 생성**: "결과 생성" 버튼을 클릭하여 4단계 분석을 실행합니다.

## 개발 가이드

### 프롬프트 수정 시 주의사항
1. 각 단계의 프롬프트는 서로 연계되어 있으므로 전체적인 일관성을 유지해야 합니다.
2. 프롬프트 수정 후 반드시 테스트를 진행하세요.
3. 주요 변경사항은 버전을 업데이트하고 문서화하세요.

### 디버깅
브라우저 콘솔에서 다음 명령어로 프롬프트 정보를 확인할 수 있습니다:
```javascript
promptManager.logPromptInfo();
```

## 기술 스택
- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+ 모듈)
- OpenAI GPT-4 API

## 라이선스
이 프로젝트는 특허받은 a.C.K.E. 영어 학습법을 기반으로 합니다. 