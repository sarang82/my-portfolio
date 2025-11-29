import { useState, useEffect, useRef } from "react"
import "../styles/Home.css"

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [expandedProjects, setExpandedProjects] = useState(new Set())
  const sectionsRef = useRef([])

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  // PDF 다운로드
  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/portfolio.pdf'  // asset 폴더의 PDF 파일 경로
    link.download = 'portfolio.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.index]))
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el
    }
  }

  return (
    <div className="portfolio-container">
      {/* Header with Simple Introduction */}
      <header className="portfolio-header fade-in visible">
        <div className="header-intro">
          <div className="intro-text">
            <p className="intro-line">안녕하세요!</p>
            <p className="intro-line">소프트웨어 품질 향상을 꿈꾸는</p>
            <p className="intro-line highlight-text">QA Engineer</p>
          </div>
        </div>
        <button onClick={handleDownloadPDF} className="pdf-circle-btn">
          <span className="pdf-icon">📄</span>
        </button>

        
      </header>

      {/* 인적사항 */}
      <section 
        className={`content-section fade-in ${visibleSections.has('0') ? 'visible' : ''}`}
        data-index="0"
        ref={(el) => addToRefs(el, 0)}
      >
        <h2 className="section-title">
          <span className="title-icon">👤</span>
          인적사항
        </h2>
        
        <div className="info-grid">
          <div className="info-card">
            <div className="info-label">이름</div>
            <div className="info-value">주사랑</div>
          </div>

          <div className="info-card">
            <div className="info-label">생년월일</div>
            <div className="info-value">2002-08-02</div>
          </div>
          
          <div className="info-card">
            <div className="info-label">이메일</div>
            <div className="info-value">julove0802@naver.com</div>
          </div>
          
          <div className="info-card">
            <div className="info-label">GitHub</div>
            <div className="info-value">
              <a href="https://github.com/sarang82" target="_blank" rel="noopener noreferrer">
                github.com/sarang82
              </a>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3 className="subsection-title">학력</h3>
          <div className="info-card">
            <div className="timeline-item">
              <div className="timeline-date">2022.03 - 2026.02</div>
              <div className="timeline-content">
                <div className="timeline-title">인하공업전문대학교</div>
                <div className="timeline-desc">컴퓨터정보공학과</div>
              </div>
            </div>
          </div>
        </div>

        <div className="subsection">
          <h3 className="subsection-title">자격증</h3>
          <div className="info-card">
            <ul className="cert-list">
              <li>정보처리산업기사</li>
              <li>SQLD</li>
              <li>CSTS(FL)</li>
            </ul>
          </div>
        </div>

        <div className="subsection">
          <h3 className="subsection-title">기술 스택</h3>
          <div className="tech-stack-grid">
            <div className="tech-card">
              <div className="tech-icon">☕</div>
              <div className="tech-name">Java</div>
              <div className="tech-level">
                <div className="level-bar">
                  <div className="level-fill" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🍃</div>
              <div className="tech-name">Spring Boot</div>
              <div className="tech-level">
                <div className="level-bar">
                  <div className="level-fill" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🗄️</div>
              <div className="tech-name">MySQL</div>
              <div className="tech-level">
                <div className="level-bar">
                  <div className="level-fill" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-icon">🖼️</div>
              <div className="tech-name">Dart</div>
              <div className="tech-level">
                <div className="level-bar">
                  <div className="level-fill" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-icon">🦋</div>
              <div className="tech-name">Flutter</div>
              <div className="tech-level">
                <div className="level-bar">
                  <div className="level-fill" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">⚛️</div>
              <div className="tech-name">React</div>
              <div className="tech-level">
                <div className="level-bar">
                  <div className="level-fill" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">🔧</div>
              <div className="tech-name">Git</div>
              <div className="tech-level">
                <div className="level-bar">
                  <div className="level-fill" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 */}
      <section 
        className={`content-section fade-in ${visibleSections.has('1') ? 'visible' : ''}`}
        data-index="1"
        ref={(el) => addToRefs(el, 1)}
      >
        <h2 className="section-title">
          <span className="title-icon">💼</span>
          프로젝트
        </h2>

        {/* 프로젝트 1 */}
        <div className="project-detail-card">
          <div 
            className="project-header clickable" 
            onClick={() => toggleProject('talkdok')}
          >
            <div>
              <h3 className="project-main-title">Talkdok</h3>
              <p className="project-summary">톡독!</p>
            </div>
            <span className={`expand-icon ${expandedProjects.has('talkdok') ? 'expanded' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedProjects.has('talkdok') && (
            <div className="project-details">
              <div className="project-meta-grid">
                <div className="meta-item">
                  <div className="meta-label">목표</div>
                  <div className="meta-value">독서 경험을 증진시키고 독서 습관 형성을 돕는 모바일 애플리케이션 개발</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">기간</div>
                  <div className="meta-value">2025.03 - 2025.06 (4개월)</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">개발환경</div>
                  <div className="meta-value">Flutter, Firebase, Android Studio</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">주요 기술스택</div>
                  <div className="tech-tags">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Dart</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Cloud Firestore</span>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-label">GitHub</div>
                  <div className="meta-value">
                    <a href="https://github.com/sarang82/book-challenge" target="_blank" rel="noopener noreferrer" className="github-link-inline">
                      https://github.com/sarang82/book-challenge
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h4 className="content-subtitle">개요</h4>
                <p className="content-text">
                  독서를 하는 습관을 들이고 싶어하는 사람들을 위한 커뮤니티 애플리케이션입니다.
                  사용자들이 읽은 책과 독서 시간을 기록할 수 있으며, AI 맞춤형 도서 추천 기능을 이용할 수 있습니다.
                </p>

                <h4 className="content-subtitle">주요 기능</h4>
                <ul className="content-list">
                  <li>독서 챌린지(책 한 권을 완독하는 걸 목표로)</li>
                  <li>독서 미션(매일 한 개의 랜덤 미션을 제공)</li>
                  <li>내 서재</li>
                  <li>도서 리뷰</li>
                  <li>동기 부여 메시지</li>
                  <li>독서 시간 타이머</li>
                  <li>AI 도서 추천</li>
                </ul>

                <h4 className="content-subtitle">담당 역할</h4>
                <ul className="content-list">
                  <li>Firestore 데이터베이스 관리</li>
                  <li>유저 CRUD 구현</li>
                  <li>이메일 Authentication 구현</li>
                  <li>챌린지 기능 CRUD 구현</li>
                  <li>Firebase Cloud messaging</li>
                  <li>Firebase Cloud Function 으로 Account Delete 관리</li>
                </ul>

                <h4 className="content-subtitle">결론</h4>
                <div className="problem-solution">
                  <div className="problem-box">
                    <strong>시도:</strong> 요구사항 작성 및 총체적 취합<br />
                    테스트 시나리오 및 테스트 케이스 작성<br />
                    ui/ux 통일성을 위한 가이드라인 작성
                  </div>
                  <div className="solution-box">
                    <strong>느낀 점:</strong> 요구사항 작성부터 테스트 케이스 및 UI/UX 가이드라인 정립에 이르기까지
                    프로젝트 초기 단계부터 품질 보증 활동에 참여하며 QA의 선제적 역할을 체감했습니다.
                    요구사항의 모호함을 조기에 해소하고, 체계적인 테스트 케이스 작성으로 사용자 행동을 예측하는 시스템적 사고력을 길렀습니다.
                    특히 UI/UX 통일성 검토는 단순히 버그를 찾는 것을 넘어, 사용자 경험 중심의 QA 마인드를 확립하는 중요한 경험이었습니다.
                    이러한 활동들이 곧 제품의 완성도와 협업 효율을 높이는 핵심임을 깨달았습니다.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 프로젝트 2 */}
        <div className="project-detail-card">
          <div 
            className="project-header clickable" 
            onClick={() => toggleProject('payday')}
          >
            <div>
              <h3 className="project-main-title">Payday Calendar</h3>
              <p className="project-summary">얼마버니?</p>
            </div>
            <span className={`expand-icon ${expandedProjects.has('payday') ? 'expanded' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedProjects.has('payday') && (
            <div className="project-details">
              <div className="project-meta-grid">
                <div className="meta-item">
                  <div className="meta-label">목표</div>
                  <div className="meta-value">아르바이트생을 위한 급여 및 근무 관리 애플리케이션</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">기간</div>
                  <div className="meta-value">2025.10 - (진행중)</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">개발환경</div>
                  <div className="meta-value">Flutter, Spring Boot, MySQL, Android Studio</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">주요 기술스택</div>
                  <div className="tech-tags">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">REST API</span>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-label">GitHub</div>
                  <div className="meta-value">
                    <a href="https://github.com/parkjto/eolmabeni_Front" target="_blank" rel="noopener noreferrer" className="github-link-inline">
                      https://github.com/parkjto/eolmabeni_Front
                    </a>
                    <br />
                    <a href="https://github.com/parkjto/eolmabeni_Back" target="_blank" rel="noopener noreferrer" className="github-link-inline">
                      https://github.com/parkjto/eolmabeni_Back
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h4 className="content-subtitle">개요</h4>
                <p className="content-text">
                  아르바이트생들이 근무 시간을 기록하고 예상 급여를 자동으로 계산해주는 모바일 애플리케이션입니다. 
                  캘린더 기반 UI로 직관적인 근무 관리가 가능합니다.
                </p>

                <h4 className="content-subtitle">주요 기능</h4>
                <ul className="content-list">
                  <li>근무 시간 등록 및 수정</li>
                  <li>캘린더 형식의 근무 기록 조회</li>
                  <li>자동 급여 계산 (시급 × 근무시간)</li>
                  <li>월별/연도별 통계</li>
                  <li>여러 직장 관리</li>
                  <li>근로자들을 위한 커뮤니티</li>
                </ul>

                <h4 className="content-subtitle">담당 역할</h4>
                <ul className="content-list">
                  <li>Spring Boot 백엔드 유저 CRUD API 개발</li>
                  <li>근무 기록 및 급여 계산 로직 구현</li>
                  <li>MySQL 데이터베이스 설계</li>
                  <li>Flutter 앱과 REST API 연동</li>
                </ul>

                <h4 className="content-subtitle">결론</h4>
                <div className="problem-solution">
                  <div className="problem-box">
                    <strong>시도:</strong> 요구사항 기능 분석 및 작성<br />
                    백엔드 로직 개발<br />
                    단위테스트 진행<br />
                    협업 및 품질 관리
                  </div>
                  <div className="solution-box">
                    <strong>느낀 점:</strong> 백엔드 개발을 담당하며 개발 초기부터 품질을 내재화하는 경험을 했습니다.
                    복잡한 급여 계산 로직 구현 시, 테스트를 전제로 한 설계의 중요성을 깨달았으며,
                    다양한 엣지 케이스를 커버하는 단위 테스트가 서비스의 신뢰도를 결정함을 체감했습니다.
                    데이터베이스 무결성과 API 유효성 검증에 집중한 경험은 견고한 시스템 구조가 곧 사용자에게 정확한 정보를 제공하는 QA의 기본임을 확인시켜 주었습니다.
                    개발과 테스트는 분리된 것이 아니라, 하나의 품질 목표를 향하는 과정임을 배웠습니다.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 프로젝트 3 */}
        <div className="project-detail-card">
          <div 
            className="project-header clickable" 
            onClick={() => toggleProject('usedtrade')}
          >
            <div>
              <h3 className="project-main-title">Used Trade</h3>
              <p className="project-summary">새로고침</p>
            </div>
            <span className={`expand-icon ${expandedProjects.has('usedtrade') ? 'expanded' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedProjects.has('usedtrade') && (
            <div className="project-details">
              <div className="project-meta-grid">
                <div className="meta-item">
                  <div className="meta-label">목표</div>
                  <div className="meta-value">안전하고 편리한 중고거래 플랫폼 구축</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">기간</div>
                  <div className="meta-value">2024.01 - 2024.04 (4개월)</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">개발환경</div>
                  <div className="meta-value">Spring Boot, React, MySQL, IntelliJ IDEA, VS Code</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">주요 기술스택</div>
                  <div className="tech-tags">
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">REST API</span>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-label">GitHub</div>
                  <div className="meta-value">
                    <a href="https://github.com/taemin01/refresh_market" target="_blank" rel="noopener noreferrer" className="github-link-inline">
                      https://github.com/taemin01/refresh_market
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h4 className="content-subtitle">개요</h4>
                <p className="content-text">
                  사용자 간 중고 물품을 안전하게 거래할 수 있는 웹 기반 플랫폼입니다. 
                  실시간 채팅, 위치 기반 검색, 거래 시스템을 통해 신뢰도 높은 거래 환경을 제공합니다.
                </p>

                <h4 className="content-subtitle">주요 기능</h4>
                <ul className="content-list">
                  <li>상품 등록/수정/삭제 및 검색</li>
                  <li>실시간 채팅 시스템</li>
                  <li>상품 북마크</li>
                  <li>위치 기반 검색</li>
                </ul>

                <h4 className="content-subtitle">담당 역할</h4>
                <ul className="content-list">
                  <li>Spring Boot 기반 REST API 설계 및 구현</li>
                  <li>JPA를 활용한 데이터베이스 모델링</li>
                  <li>상품 CRUD 기능 및 검색 API 개발</li>
                  <li>상품 북마크 기능 개발</li>
                </ul>

                <h4 className="content-subtitle">결론</h4>
                <div className="problem-solution">
                  <div className="problem-box">
                    <strong>시도:</strong> 요구사항 정의 작성<br />
                    데이터베이스 설계 및 보수<br />
                    Postman을 이용한 API 테스트
                  </div>
                  <div className="solution-box">
                    <strong>느낀 점:</strong> 중고거래 플랫폼 구축 과정에서 안전성 확보를 위한 QA 마인드셋을 확립할 수 있었습니다.
                    특히 상품 CRUD 및 북마크 기능 개발 시, 인가(Authorization) 및 접근 통제 로직을 철저히 검증하는 것이
                    서비스의 신뢰도를 결정하는 핵심임을 체감했습니다. REST API 설계부터 데이터베이스 무결성까지,
                    개발자가 품질을 고려하여 코드를 작성하는 것이 결함을 줄이는 가장 효과적인 방법임을 깨달았습니다.
                    이는 QA가 개발 프로세스의 마지막 단계가 아닌, 전 과정에 걸쳐 품질을 설계해야 함을 이해하는 소중한 경험이었습니다.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>QA Engineer를 꿈꾸는 주사랑입니다.</p>
        <div className="footer-links">
          <a href="mailto:julove0802@naver.com">Email</a>
          <a href="https://github.com/sarang82" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  )
}