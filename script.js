const missionData = {
    '초기소화반': {
        title: '초기소화반 세부 임무',
        type: 'accordion',
        content: [
            {
                title: '1. 출동 준비',
                description: `
                    <ul>
                        <li><strong>장비 위치 확인</strong>
                            <ul>
                                <li>방화복: 1층 로비 (2 SET)</li>
                                <li>방열복: 지하 주차장 (2 SET)</li>
                                <li>공기호흡기: 1층 로비 (60분 2EA), 지하 주차장 (30분 2EA)</li>
                            </ul>
                        </li>
                        <li>개인 보호구 준비</li>
                        <li>현장 내 소화수단 사전 검토</li>
                        <li>비상연락망 및 연락 수단 확인</li>
                    </ul>
                `
            },
            {
                title: '2. 현장 도착',
                description: `
                    <ul>
                        <li>화재 정보 확인 (종류, 규모 등)</li>
                        <li>화재 상황 전파 및 보고 / 긴급 신고</li>
                        <li>전원 및 가스 차단 여부 확인 (관련 화재 시)</li>
                    </ul>
                `
            },
            {
                title: '3. 초기 소화',
                description: `
                    <ul>
                        <li>소화기, 소화전 등 적정 소화 설비 사용</li>
                        <li>스프링클러, 가스계소화설비 등 수동조작</li>
                        <li>상황 악화 시 즉시 철수</li>
                        <li>화재 확산 방지를 위해 방화문, 셔터 폐쇄</li>
                    </ul>
                `
            },
            {
                title: '4. 후속 조치',
                description: `
                    <ul>
                        <li>진화 여부 확인 (재발화 등)</li>
                        <li>지휘통제반에 상황 보고</li>
                        <li>부상자 발생 시 응급구조반 요청</li>
                        <li>장비 및 설비 정상화</li>
                    </ul>
                `
            }
        ]
    },
    '응급구조반': {
        title: '응급구조반 세부 임무',
        type: 'accordion',
        content: [
            {
                title: '1. 출동 준비',
                description: `
                    <ul>
                        <li>개인 보호구 (방열복, 공기호흡기 등) 준비</li>
                        <li>응급구조장비 (들것, 구급키트 등) 점검</li>
                    </ul>
                `
            },
            {
                title: '2. 현장 도착',
                description: `
                    <ul>
                        <li>화재 현장 내 인명 피해 가능성 파악</li>
                        <li>구조 대상자 탐색 및 위치 확인</li>
                        <li>신속한 구조 활동을 위한 진입 경로 확보</li>
                    </ul>
                `
            },
            {
                title: '3. 응급 구조',
                description: `
                    <ul>
                        <li>요구조자 신속 구조 및 안전한 장소로 이송</li>
                        <li>부상자 발생 시 응급 처치 (지혈, 심폐소생술 등)</li>
                        <li>이송할 병원 정보 확인 및 연락</li>
                    </ul>
                `
            },
            {
                title: '4. 후속 조치',
                description: `
                    <ul>
                        <li>부상자 및 사망자 명단 작성 및 보고</li>
                        <li>지휘통제반에 구조 및 응급상황 보고</li>
                        <li>사용된 장비 정리 및 점검</li>
                    </ul>
                `
            }
        ]
    },
    '방호안전반': {
        title: '방호안전반 세부 임무',
        type: 'accordion',
        content: [
            {
                title: '1. 출동 준비',
                description: `
                    <ul>
                        <li>무전기, 확성기 등 현장 통제 장비 준비</li>
                        <li>경계선, 안전 띠 등 현장 구획 장비 준비</li>
                        <li>공기호흡기 사용 가능 인원은 확인 및 점검</li>
                    </ul>
                `
            },
            {
                title: '2. 현장 도착',
                description: `
                    <ul>
                        <li>화재 현장 주변 통제선 설정 및 경비</li>
                        <li>소화반, 구조반이 안전하게 활동할 수 있도록 지원</li>
                    </ul>
                `
            },
            {
                title: '3. 현장 통제',
                description: `
                    <ul>
                        <li>소방차량 진입로 확보 및 불필요한 인원 접근 차단</li>
                        <li>2차 사고 방지 위해 가스, 전기 등 위험물 차단 조치</li>
                    </ul>
                `
            },
            {
                title: '4. 후속 조치',
                description: `
                    <ul>
                        <li>화재 진압 및 구조 활동 종료 후 현장 정리 지원</li>
                        <li>출입 통제 해제 및 통제 상황 보고</li>
                    </ul>
                `
            }
        ]
    },
    '지휘통제팀': {
        title: '지휘통제팀 세부 임무',
        type: 'accordion',
        content: [
            {
                title: '1. 현장 지휘소 설치',
                description: `
                    <ul>
                        <li>화재 현장 안전이 확보된 지역에 지휘본부 설치</li>
                        <li>무전기, 통제 장비 등 지휘장비 준비</li>
                    </ul>
                `
            },
            {
                title: '2. 상황 파악',
                description: `
                    <ul>
                        <li>화재 발생 상황, 규모, 인명 피해 등 종합적 정보 수집</li>
                        <li>각 반의 활동 현황 실시간 모니터링 및 지시</li>
                    </ul>
                `
            },
            {
                title: '3. 지휘 및 통제',
                description: `
                    <ul>
                        <li>각 반의 임무 배정 및 효율적인 작전 지시</li>
                        <li>외부 유관기관 (소방서, 경찰)과 협조 및 정보 공유</li>
                        <li>본부 및 상급 기관에 상황 보고</li>
                    </ul>
                `
            },
            {
                title: '4. 후속 조치',
                description: `
                    <ul>
                        <li>화재 진압 완료 후 종합 상황 보고서 작성</li>
                        <li>화재 원인 및 피해 규모 조사에 협조</li>
                        <li>대응 활동에 대한 평가 및 개선 사항 도출</li>
                    </ul>
                `
            }
        ]
    },
    '소화기': {
        title: '소화기 사용법',
        type: 'image-manual',
        content: `
            <img src="./assets/images/EXTINGMANUAL.jpg" alt="소화기 사용법 이미지: 안전핀 뽑기, 노즐 잡고, 손잡이 누르고, 빗자루 쓸듯 분사" class="manual-image">
            <div class="manual-notes">
                <p><strong>🚨 주의사항:</strong></p>
                <p>✔️ 소화기는 바람을 등지고 사용해야 연기 흡입을 막고 효과적으로 진화할 수 있습니다.</p>
                <p>✔️ 불이 완전히 꺼질 때까지 소화기를 사용해야 합니다.</p>
                <p>✔️ 전기가 흐르는 곳에 물을 뿌려서는 안 됩니다. (C급 화재)</p>
            </div>
        `
    },
    '소화전': {
        title: '소화전 사용법',
        type: 'image-manual',
        content: `
            <img src="./assets/images/HYDMANU.jpg" alt="소화전 사용법 이미지:함 열고 호스 꺼내서 불로, 밸브 열고, 물 뿌리기" class="manual-image">
            <div class="manual-notes">
                <p><strong>🚨 주의사항:</strong></p>
                <p>✔️ 소화전은 2인 1조로 사용해야 효과적입니다.</p>
                <p>✔️ 옥내 소화전은 초기 화재 진압용이므로 불이 커지면 사용하지 말고 즉시 대피하세요.</p>
            </div>
        `
    },
    '공기호흡기': {
        title: '공기호흡기 사용법',
        type: 'image-manual',
        content: `
            <img src="./assets/images/AIRMANUAL.jpg" alt="공기호흡기 사용법 이미지: 메고, 용기 밸브 열고, 압력 확인, 면체 착용" class="manual-image">
            <div class="manual-notes">
                <p><strong>🚨 주의사항:</strong></p>
                <p>✔️ 공기압이 부족하면 위험하므로 항상 사용 전 공기량을 확인해야 합니다.</p>
                <p>✔️ 용기 밸브는 반드시 끝까지 완전히 열어야 공기가 원활하게 공급됩니다.</p>
            </div>
        `
    },
    '심폐소생술(CPR)': {
        title: '심폐소생술(CPR)',
        type: 'image-manual',
        content: `
            <img src="./assets/images/CPRMANUAL.jpg" alt="심폐소생술(CPR) 단계 이미지: 의식 확인, 119 신고, 가슴 압박, 인공호흡, AED 사용" class="manual-image">
            <div class="manual-notes">
                <p><strong>🚨 주의사항:</strong></p>
                <p>✔️ 정확하고 강하게 가슴을 압박하는 것이 중요합니다. 분당 100-120회 속도로, 약 5cm 깊이로 압박하세요.</p>
                <p>✔️ 인공호흡은 선택사항이지만, 가슴 압박은 끊기지 않도록 해야 합니다.</p>
            </div>
        `
    }
};

function openPopup(category) {
    const popup = document.getElementById('mission-popup');
    const popupContentBody = document.getElementById('popup-content-body');
    const popupTitle = document.getElementById('popup-title');

    const data = missionData[category];
    popupTitle.textContent = data.title;
    popupContentBody.innerHTML = '';

    if (data.type === 'accordion') {
        data.content.forEach(item => {
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');

            const accordionHeader = document.createElement('div');
            accordionHeader.classList.add('accordion-header');
            accordionHeader.innerHTML = `${item.title} <span>+</span>`;

            const accordionContent = document.createElement('div');
            accordionContent.classList.add('accordion-content');
            accordionContent.innerHTML = item.description;

            accordionItem.appendChild(accordionHeader);
            accordionItem.appendChild(accordionContent);
            popupContentBody.appendChild(accordionItem);

            accordionHeader.addEventListener('click', () => {
                const isActive = accordionContent.classList.toggle('active');
                const icon = accordionHeader.querySelector('span');
                icon.textContent = isActive ? '-' : '+';
            });
        });
    } else if (data.type === 'image-manual') {
        popupContentBody.innerHTML = data.content;
    }

    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('mission-popup').style.display = 'none';
    const activeContents = document.querySelectorAll('.accordion-content.active');
    activeContents.forEach(content => {
        content.classList.remove('active');
        content.previousElementSibling.querySelector('span').textContent = '+';
    });
}

// 팝업 외부 클릭 시 팝업 닫기
window.addEventListener('click', function(event) {
    const popup = document.getElementById('mission-popup');
    if (event.target === popup) {
        closePopup();
    }
});
