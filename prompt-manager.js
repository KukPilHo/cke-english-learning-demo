// 프롬프트 관리자 모듈
import { prompts as currentPrompts } from './prompts.js';

class PromptManager {
    constructor() {
        this.prompts = currentPrompts;
        this.version = '1.0.0';
    }

    // 현재 프롬프트 버전 반환
    getVersion() {
        return this.version;
    }

    // 특정 단계의 프롬프트 반환
    getPrompt(step) {
        if (!this.prompts[step]) {
            throw new Error(`프롬프트를 찾을 수 없습니다: ${step}`);
        }
        return this.prompts[step];
    }

    // 모든 프롬프트 반환
    getAllPrompts() {
        return { ...this.prompts };
    }

    // 프롬프트 업데이트 (개발용)
    updatePrompt(step, newPrompt) {
        if (!this.prompts[step]) {
            throw new Error(`업데이트할 프롬프트를 찾을 수 없습니다: ${step}`);
        }
        this.prompts[step] = newPrompt;
        console.log(`프롬프트 업데이트됨: ${step}`);
    }

    // 프롬프트 정보 출력 (디버깅용)
    logPromptInfo() {
        console.log('=== 프롬프트 정보 ===');
        console.log(`버전: ${this.version}`);
        console.log('사용 가능한 단계:', Object.keys(this.prompts));
        console.log('==================');
    }
}

// 싱글톤 인스턴스 생성
const promptManager = new PromptManager();

export default promptManager; 